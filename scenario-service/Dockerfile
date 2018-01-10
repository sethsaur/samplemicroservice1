FROM java:8-jre
MAINTAINER saurabh seth <sss@sss.com>

ADD ./target/scenario-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/scenario-service.jar"]

EXPOSE 7000