import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// We import routes
import homeRoute from './routes/home.route'
import convertRoute from './routes/convert.route'



const app = express();
const port = process.env.SERVER_PORT;

const server = http.createServer(app);
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




homeRoute(router);
convertRoute(router);

app.use(router);

server.listen(port, () => {
	logger.info('JoliMoi service started - ', port);
});



var template =
`<!DOCTYPE html> <html> <body>
	<script type="text/javascript">
		var source = new EventSource("/events/");
		source.onmessage = function(e) {
			document.body.innerHTML += e.data + "<br>";
		};
	</script>
</body> </html>`;

app.get('/', function (req, res) {
	res.send(template); // <- Return the static template above
});

var clientId = 0;
var clients = {}; // <- Keep a map of attached clients

// Called once for each new client. Note, this response is left open!
app.get('/events/', function (req, res) {
	req.socket.setTimeout(Number.MAX_VALUE);
	res.writeHead(200, {
		'Content-Type': 'text/event-stream', // <- Important headers
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive'
	});
	res.write('\n');
	(function (clientId) {
		clients[clientId] = res; // <- Add this client to those we consider "attached"
		req.on("close", function () {
			delete clients[clientId]
		}); // <- Remove this client when he disconnects
	})(++clientId)
});

setInterval(function () {
	var msg = Math.random();
	console.log("Clients: " + Object.keys(clients) + " <- " + msg);
	for (clientId in clients) {
		clients[clientId].write("data: " + msg + "\n\n"); // <- Push a message to a single attached client
	};
}, 2000);

app.listen(process.env.PORT || 8080);