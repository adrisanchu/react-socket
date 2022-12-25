# Band names

To run in your local network:

- 1. Replace the IP in the front [App.js](./front/src/App.js).
  <pre><code>
    const connectSocketServer = () => {
      const socket = io.connect('http:/{YOUR_IP_ADDRESS}:8080', {
        transports: ['websocket'],
      });
      return socket;
    };
  </code></pre>

- 2. Replace the IP in the server [index.html](./server/public/index.html)
  <pre><code>
    const socket = io('http://{YOUR_IP_ADDRESS}:8080');
  </code></pre>
