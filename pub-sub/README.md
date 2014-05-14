### Let’s get the publisher running:

```
$ node --harmony zmq-watcher-pub.js data.txt
```

With the PUB program still running in one terminal, fire up zmq-watcher-sub in a second one:

```
$ node --harmony zmq-watcher-sub.js
```

Then, in a third terminal, touch the target file:

```
$ touch data.txt
```

In the subscriber terminal, you should see output something like this:

```
File 'data.txt' changed at Wed May 22 2013 21:34:10 GMT-0400 (EDT)
```
