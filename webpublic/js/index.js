var returnedSuggestion = ''
        let editor, doc, cursor, line, pos
        document.addEventListener("keydown", (event) => {
            setTimeout(() => {
                editor = event.target.closest('.CodeMirror');
                if (editor) {
                    doc = editor.CodeMirror.getDoc()
                    cursor = doc.getCursor()
                    line = doc.getLine(cursor.line)
                    pos = { line: cursor.line, ch: line.length }
                    if (event.key == "Enter") {
                        var query = doc.getRange({ line: Math.max(0, cursor.line - 10), ch: 0 }, { line: cursor.line, ch: 0 })
                        window.postMessage({ source: 'getSuggestion', payload: { data: query } })
                        //displayGrey(query)
                    }
                    else if (event.key == "ArrowRight") {
                        acceptTab(returnedSuggestion)
                    }
                }
            }, 0)
        })

        function acceptTab(text) {
            if (suggestionDisplayed) {
                doc.replaceRange(text, pos)
                suggestionDisplayed = false
            }
        }
        function displayGrey(text) {
            var element = document.createElement('span')
            element.innerText = text
            element.style = 'color:grey'
            var lineIndex = pos.line;
            editor.getElementsByClassName('CodeMirror-line')[lineIndex].appendChild(element)
            suggestionDisplayed = true
        }
        window.addEventListener('message', (event) => {
            if (event.source !== window) return
            if (event.data.source == 'return') {
                returnedSuggestion = event.data.payload.data
                displayGrey(event.data.payload.data)
            }
        })


