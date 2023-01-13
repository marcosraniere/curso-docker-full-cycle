FROM golang:1.15-alpine as builder
COPY ./app/main.go /
RUN go build -o /main ..


FROM scratch
COPY --from=builder /main /
ENTRYPOINT ["./main" ]
