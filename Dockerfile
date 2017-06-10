FROM python

RUN apt-get update -y

COPY . /code

WORKDIR /code

RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python"]

CMD ["app/__init__.py"]
