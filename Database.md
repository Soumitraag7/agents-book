# USER

- USER_ID
- CKERK_ID
- FULL NAME
- EMAIL
- PASSWORD?
- PROFILE_PIC
- AGENCY_NAME
- ROLE= 'USER' | 'AGENT' | 'ADMIN'
- AGENT_VARIFIED= 'TRUE' | 'FALSE'
- USER_SUBSCRIPTION
- TIMESTAMP

# PROFILE

- PROFILE_ID
- USER_ID
- AGENCY_NAME
- AGENCY_ADD
- POST_ID
- BOOKMARK
- AGENT_VARIFIED = 'TRUE' | 'FALSE'
- TIMESTAMP

# USER_SUBSCRIPTION

- SUB_ID
- USER_ID
- SUB_START_DATE
- SUB_END_DATE
- IS_SUBSCRIBED = 'TRUE' | 'FALSE'
- TIMESTAMP

# POST

- POST_ID
- USER_ID
- LOC_FROM
- LOC_TO
- PRICE
- AVAILABLE SEATS
- FLIGHT_NUMBER
- CABIN_TYPE
- DURATION
- STOPS
- DEP_DATE
- ARIVAL_DATE
- AIRLINE
- IS_ROUND_TRIP
- ROUND_TRIP
- LAYOVER
  - AIRPORT
  - DURTION
- TIMESTAMP

# ROUND_TRIP

- ROUND_TRIP_ID
- LOC_FROM
- LOC_TO
- PRICE
- AVAILABLE SEATS
- FLIGHT_NUMBER
- CABIN_TYPE
- DURATION
- STOPS
- DEP_DATE
- ARIVAL_DATE
- AIRLINE
- ROUND_TRIP
- LAYOVER
  - AIRPORT
  - DURTION
- TIMESTAMP

# AIRPORT_COLLECTION

- AIRPORT_COLLLECTION_ID
- AIRPORT_CODE
- AIRPORT_NAME
- CITY
- COUNTRY

# AIRLINE_COLLECTION

- AIRLINE_COLLLECTION_ID
- AIRLINE_NAME
- AIRLINE_CODE
- COUNTRY

## REF

### AIRLINE DATA

- https://airhex.com/
- https://content.r9cdn.net/rimg/provider-logos/airlines/v/SU.png?crop=false&width=108&height=92&fallback=default3.png&_v=6fc13e71da6948c425f74eaa6ac55f97

### RELATED

- https://porichoy.gov.bd/
- https://www.buyairticket.com/
