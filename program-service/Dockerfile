FROM java:8-jre
MAINTAINER saurabh seth <sss@sss.com>

ADD ./target/program-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/program-service.jar"]

EXPOSE 7000