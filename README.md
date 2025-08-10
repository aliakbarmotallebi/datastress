# 🌩 datastress

Load testing project using **TypeScript**, **k6**, **InfluxDB**, and **Grafana**.  
This setup allows you to write test scripts in TypeScript, run them with k6, store results in InfluxDB, and visualize them in Grafana.

---


## 🚀 Setup

### 1. Clone the repository
```
git clone https://github.com/yourusername/datastress.git
cd datastress
```

### 2. Start all services
```
docker compose up -d --build
```
This will start:
```
- influxdb  → Database for storing k6 results (http://localhost:8086)
- app       → TypeScript development container
- k6        → Load testing tool
```

---

## 🧪 Running a Test

Run a test script and send results to InfluxDB:
```
docker compose run k6 run --out influxdb=http://influxdb:8086/k6 tests/main.ts
```

Run a different test:
```
docker compose run k6 run --out influxdb=http://influxdb:8086/k6 tests/idea/test.ts
```

---

## 📊 Viewing Results in Grafana


1. Add a new data source:
```
Type: InfluxDB
URL: http://influxdb:8086
Database: k6
User/Password: leave empty (InfluxDB 1.8 default)
```
2. Import the official k6 dashboard:
```
https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/
```
3. View your load testing results in real time.

---

## 📂 Project Structure
```
.
├── docker-compose.yml      # Docker Compose services
├── package.json            # NPM packages and scripts
├── tsconfig.json           # TypeScript configuration
├── tests/                  # k6 test scripts
│   ├── main.ts
│   └── idea/test.ts
├── src/                    # Optional application code
└── README.md
```

---


## ⏳ Quick Commands
```
# Start all services
docker compose up -d --build

# Stop all services
docker compose down

# Run a test
docker compose run k6 run --out influxdb=http://influxdb:8086/k6 tests/main.ts
```

---

## 📜 License
```
MIT License © 2025
```

