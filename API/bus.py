# import os
# from pathlib import Path
import requests
from sanic import Sanic
from sanic.response import json
from datetime import datetime
from collections import defaultdict
# base_path = Path(os.path.dirname(os.path.abspath(__file__)))
# data_file = os.path.join(base_path, "data.json")
#
# with open(data_file) as f:
#     data = json.load(f)

date_format = "%Y-%m-%dT%H:%M:%S.%fZ"
app = Sanic(name="API")


def parse_data(data):
    parsed_data = defaultdict(int)
    next_day_data = defaultdict(int)
    for data_item in data:
        start_time = datetime.strptime(data_item['startTime'], date_format)
        end_time = datetime.strptime(data_item['endTime'], date_format)
        if end_time.hour >= start_time.hour:
            for hour in range(start_time.hour, end_time.hour + 1):
                parsed_data[hour] += 1
        else:
            for hour in range(start_time.hour, 24):
                parsed_data[hour] += 1
            for hour in range(end_time.hour + 1):
                next_day_data[hour] += 1
    return parsed_data


@app.get("/data")
async def test(request):
    url = "http://optibus-interview.herokuapp.com/"
    rs = requests.get(url)
    parsed_data = parse_data(rs.json())
    return json(parsed_data)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
