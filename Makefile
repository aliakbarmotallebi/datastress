
K6_CMD = docker compose run --rm k6 run --out "xk6-influxdb=http://influxdb:8086" --env INFLUXDB_TOKEN=SuperSecretToken456!

test-idea:
	$(K6_CMD) tests/idea/test.ts
