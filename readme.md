all code was tested in Node.js runtime

main.js runs module tests + instances

to add node build system to submlime (node must be installed)

* tools -> build system -> new Build System

2. save new build file as JavaScript.sublime-build

3. enter into JavaScript.sublime-build 


> {
>      "cmd": ["/path/to/node", "$file"],
>      "selector": "source.js"
>  }


* save file
5. tools -> build system -> JavaScript
