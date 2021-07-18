# GuestBook

![/image/readme.JPG](/image/readme.JPG)

------

### 프로젝트 설명

지인을 집에 초대하고 방명록을 남겨주세요. 



### 방향

Docker 학습을 위한 프로젝트. 비교적 구현이 쉬운 주제를 고름.   
프론트엔드는 최소화해서 구현.   
프론트엔드를 JS로 백엔드를 Python으로 구성하여 각각 다른 언어로 진행하고자 함.   
Dockerfile을 생성하고 이미지를 통해 Google Cloud Platform의 인스턴스에서 불러오는 것이 주 목적.   



### 구분

- Frontend :  NodeJS + Pug  + CSS
- Backend : Python
- DB : Mysql



### 사용

- **NodeJS**

    **body-parser** :  req.body 를 통해 post 된 입력값을 받아오려고 추가하였다.

    **axios** : Python으로 구현한 API를 불러오기 위해서 추가하였다.

    **babel** : ES6 개발환경

- **Python**

    **flask** : API를 구현하기 위해 사용하였다. 

    f**lask-mysql** : flask와 mysql을 연결하기 위해서 추가하였다.



### 구성

![/image/readme2.jpg](/image/readme2.jpg)



### 개선할 점

Backend 부분에서 mysql과 연결할 때 따로 env를 사용하지 않고 구현했다.       
수정) Dockerfile에 env 명령어를 써서 환경변수를 설정해서 python과 같이 사용할 수 있을 것 같다.

Nginx를 통해서 개선을 시도했지만 생각보다 성능이 눈에 보이지 않았음.

### Nginx
스트레스 테스트를 통해 접속량에 대한 실험을 진행하였다.        
데이터는 동일한 데이터를 생성해서 집어넣었고 시간 당 post되는 수만 변경해서 진행했다.      
Nginx를 통해 로드밸런싱을 하여 인스턴스를 1개,2개,3개를 늘리며 각 post에 대한 확인을 하였음.        
하지만 크게 나아지는 모습이 없었음. 예상하기로는 DB에 저장하면서 병목현상이 일어나는 것이 아닌가 싶음.        

=> RabbitMQ, Kafka와 같은 메세지큐를 이용해서 DB 적재에 대한 대응을 하면 해결할 수 있을 것 같다.

### Docker

Frontend,Backend,DB가 각각 다른 컨테이너에서 존재한다. 한 모듈에 트래픽이 몰리면 그 컨테이너의 개수를 늘려서 대응하면 된다.
