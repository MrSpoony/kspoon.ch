let introduction = document.querySelector('.introduction p')
introduction.innerHTML = "<span class='line'>"+(introduction.innerHTML.split("\n").filter(Boolean).join("</span>\n<span class='line'>"))+"</span>";
