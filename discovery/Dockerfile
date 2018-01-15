FROM java:8-jre
MAINTAINER saurabh seth <sss@sss.com>

ADD ./target/discovery.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/discovery.jar"]

EXPOSE 8762