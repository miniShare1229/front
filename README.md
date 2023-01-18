# Mini Share FE

## 핵심 사용 툴

- UI, SPA, CSR : react
- 페이지 처리 : react router
- CSS : styled-components
- 상태관리 : ~~redux~~ -> redux-toolkit(보일러 플레이트 제거, store 설정 단순화를 위해) 
- API통신 : ~~axios~~ -> rtk query(캐싱 처리, 로딩 표시, 중복 요청 방지 등을 위해)
- 번들링 : vite  

## 배포 툴

~~netlify~~ -> 서버측에 빌드파일 얹어서 배포하는 것으로 변경
## Commit Convention

- `docs` : 문서 작업(markdown) 
- `feat` : 새로운 기능 구현 / 기능 변경
- `conf` : 설정 파일 관련
- `design` : css 작업
- `rename` : 파일 명 / 디렉토리 변경
- `remove` : 파일 삭제
- `chore` : 패키지 매니저 변경/삭제
- `refactor` : 코드 리팩토링
- `fix` : 버그, 오류 수정 


## 발생 문제 / 해결

### SSR, CSR 

> 프론트측에서 빌드된 html이 서버에서 랜더링되지 않음

- react.js 기반으로 작업한 결과물은 CSR, SPA 방식으로 구현되었다
- 현재 express로 작업된 프로젝트 구성은 SSR, MPA이다
- url 변경은 서버쪽 요청이므로 서버에서 설정한 작업이 최우선 처리된다(프론트단의 라우트 작업 무시)
- SPA의 경우 단일페이지이므로 서버쪽 리다이렉트 설정이 필요하다
- CSR방식에서 클라이언트가 라우팅을 처리하려면 서버측 설정이 필요하다(express는 `sendFile`메소드)

### API 요청 

> POST요청이 거절되며 404에러 발생

- 보통 404는 요청 url 주소 문제지만, 서버측에서 허용한 메소드로 요청을 보내지 않을 때 발생할 수도 있다
- `get`은 메소드 `GET`, `post`는 메소드 `POST`로 서버와 함께 맞춰야 한다
- 서버 API 개발 중 발생하는 통신 에러는 원인 예측/파악이 어렵다
- 프론트단 로직 테스트는 json-server로 확인하는 것이 편리하다
- 서버측 요청/응답 확인은 postman, thunder client로 확인하는 것이 좋다
