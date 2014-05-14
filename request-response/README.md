### Start the program in a terminal as usual with node

```
$ node --harmony zmq-response.js
```

Let’s see how these REQ and REP sockets work together. With the zmq-response program still running in one terminal, run this command in another:

```
$ node --harmony zmq-request.js data.txt
Sending request for data.txt
Received response: { content: '', timestamp: 1370271311810, pid: 32730 }
```
