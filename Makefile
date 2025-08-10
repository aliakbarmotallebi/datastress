K6_CMD=docker compose run k6 run --out influxdb=http://influxdb:8086/k6

k6:
	$(K6_CMD) $(FILE)

