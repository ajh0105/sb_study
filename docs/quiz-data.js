const CHAPTER_TERMS = {
  1: [
    { term: "Spring Boot", desc: "복잡한 설정을 줄여 빠르게 웹 애플리케이션을 개발하게 돕는 프레임워크" },
    { term: "Auto Configuration", desc: "클래스패스와 환경을 보고 필요한 설정을 자동 적용하는 기능" },
    { term: "@SpringBootApplication", desc: "설정, 자동설정, 컴포넌트 스캔을 한 번에 활성화하는 핵심 어노테이션" },
    { term: "SpringApplication.run()", desc: "애플리케이션 컨텍스트를 시작하고 내장 서버를 구동하는 메서드" },
    { term: "Embedded Tomcat", desc: "별도 서버 설치 없이 애플리케이션 실행만으로 서버를 띄우는 방식" },
    { term: "build.gradle", desc: "의존성과 빌드 설정을 관리하는 Gradle 설정 파일" },
    { term: "starter-web", desc: "Spring MVC와 내장 서버 등 웹 개발 핵심 기능을 제공하는 스타터" },
    { term: "starter-data-jpa", desc: "JPA와 ORM 기반 데이터 접근 기능을 제공하는 스타터" },
    { term: "starter-thymeleaf", desc: "서버 사이드 HTML 템플릿 렌더링 기능을 제공하는 스타터" },
    { term: "starter-validation", desc: "입력값 유효성 검사 기능(@Valid 등)을 제공하는 스타터" },
    { term: "application.yml", desc: "포트, DB 정보 등 런타임 설정을 외부화해 관리하는 파일" },
    { term: "server.port", desc: "내장 서버가 수신할 HTTP 포트 번호를 지정하는 설정 키" },
    { term: "spring.datasource.url", desc: "데이터베이스 접속을 위한 JDBC URL을 지정하는 설정 키" },
    { term: "ddl-auto:create", desc: "애플리케이션 시작 시 테이블을 새로 생성하는 개발용 설정" },
    { term: "ddl-auto:none", desc: "JPA가 DDL을 수행하지 않도록 하는 운영 권장 설정" },
    { term: "show-sql:true", desc: "실행되는 SQL을 콘솔 로그로 출력하도록 하는 설정" },
    { term: "MVC", desc: "Controller, Service/Model, View 역할을 분리해 구조화하는 패턴" },
    { term: "Controller", desc: "HTTP 요청을 받아 서비스 호출 후 뷰/응답을 반환하는 계층" },
    { term: "Service", desc: "비즈니스 규칙과 유스케이스 흐름을 담당하는 계층" },
    { term: "Repository", desc: "데이터베이스 접근(CRUD)을 담당하는 계층" }
  ],
  2: [
    { term: "JPA", desc: "객체와 데이터베이스 테이블 간 매핑을 지원하는 자바 표준 ORM 명세" },
    { term: "@Entity", desc: "JPA가 관리하는 테이블 매핑 클래스임을 나타내는 어노테이션" },
    { term: "@Table", desc: "엔티티가 매핑될 테이블 이름 등의 정보를 지정하는 어노테이션" },
    { term: "@Id", desc: "엔티티 기본 키 필드를 지정하는 어노테이션" },
    { term: "@GeneratedValue(IDENTITY)", desc: "DB 증가 전략으로 기본 키를 자동 생성하는 설정" },
    { term: "@Column(nullable=false)", desc: "해당 컬럼이 null을 허용하지 않도록 지정하는 설정" },
    { term: "@Column(unique=true)", desc: "해당 컬럼의 중복 입력을 허용하지 않는 설정" },
    { term: "@MappedSuperclass", desc: "공통 필드를 부모 클래스에서 상속받도록 하는 매핑 전략" },
    { term: "BaseEntity", desc: "생성일/수정일 같은 공통 필드를 모아 재사용하는 부모 엔티티" },
    { term: "@ManyToOne", desc: "다대일 연관관계를 표현하는 어노테이션" },
    { term: "@OneToMany", desc: "일대다 연관관계를 표현하는 어노테이션" },
    { term: "@JoinColumn", desc: "외래 키 컬럼 이름과 제약 조건을 지정하는 어노테이션" },
    { term: "FetchType.LAZY", desc: "연관 엔티티를 실제 접근 시점에 조회하는 지연 로딩 전략" },
    { term: "FetchType.EAGER", desc: "엔티티 조회 시 연관 엔티티를 즉시 함께 조회하는 전략" },
    { term: "@Enumerated(STRING)", desc: "enum 값을 숫자 대신 문자열로 DB에 저장하는 설정" },
    { term: "MemberRole.USER", desc: "회원 권한의 기본값으로 주로 설정되는 일반 사용자 역할" },
    { term: "cascade", desc: "부모 엔티티 작업을 자식 엔티티에도 전파하는 옵션" },
    { term: "orphanRemoval", desc: "부모와 관계가 끊긴 자식 엔티티를 자동 삭제하는 옵션" },
    { term: "기본 생성자", desc: "JPA가 리플렉션으로 엔티티를 생성하기 위해 필요한 생성자" },
    { term: "도메인 모델링", desc: "데이터 구조뿐 아니라 업무 규칙과 의미를 함께 설계하는 과정" }
  ],
  3: [
    { term: "Repository", desc: "데이터 저장소 접근 로직을 캡슐화하는 계층" },
    { term: "JpaRepository", desc: "기본 CRUD와 페이징 기능을 제공하는 Spring Data JPA 인터페이스" },
    { term: "findById()", desc: "기본 키 기준 단건 조회를 수행하는 메서드" },
    { term: "findAll()", desc: "전체 엔티티 목록을 조회하는 메서드" },
    { term: "save()", desc: "신규 저장 또는 변경 반영을 처리하는 메서드" },
    { term: "deleteById()", desc: "기본 키 기준 삭제를 수행하는 메서드" },
    { term: "findByUsername()", desc: "메서드 이름 규칙으로 조건 조회 쿼리를 생성하는 예시" },
    { term: "existsBy...", desc: "조건에 맞는 데이터 존재 여부를 boolean으로 반환하는 패턴" },
    { term: "countBy...", desc: "조건에 맞는 데이터 건수를 반환하는 메서드 패턴" },
    { term: "OrderByIdDesc", desc: "정렬 조건을 메서드 이름에 포함해 최신순 조회를 표현하는 패턴" },
    { term: "@Query", desc: "JPQL 또는 네이티브 쿼리를 직접 명시할 때 사용하는 어노테이션" },
    { term: "@Param", desc: "쿼리의 named parameter와 메서드 인자를 연결하는 어노테이션" },
    { term: "JPQL", desc: "테이블이 아닌 엔티티와 필드 중심으로 작성하는 쿼리 언어" },
    { term: "Optional<T>", desc: "값의 존재/부재를 타입으로 표현해 null 처리를 명확히 하는 래퍼" },
    { term: "orElseThrow()", desc: "값이 없을 때 예외를 던져 실패 상황을 명확히 처리하는 메서드" },
    { term: "isPresent()", desc: "Optional 내부 값 존재 여부를 확인하는 메서드" },
    { term: "isEmpty()", desc: "Optional 내부 값 부재 여부를 확인하는 메서드" },
    { term: "orElse()", desc: "값이 없을 때 기본값을 즉시 반환하는 Optional 메서드" },
    { term: "orElseGet()", desc: "값이 없을 때만 Supplier를 실행해 대체값을 만드는 메서드" },
    { term: "인터페이스 기반 구현", desc: "Repository를 인터페이스로 선언하면 구현체를 자동 생성받는 방식" }
  ],
  4: [
    { term: "Service 계층", desc: "비즈니스 규칙과 유스케이스 흐름을 담당하는 계층" },
    { term: "@Service", desc: "서비스 클래스를 스프링 빈으로 등록하는 어노테이션" },
    { term: "@Transactional", desc: "여러 DB 작업을 하나의 트랜잭션으로 묶어 정합성을 보장하는 어노테이션" },
    { term: "readOnly=true", desc: "조회 전용 트랜잭션 힌트로 변경 감지를 줄이는 옵션" },
    { term: "생성자 주입", desc: "필수 의존성을 객체 생성 시점에 주입받는 권장 DI 방식" },
    { term: "@RequiredArgsConstructor", desc: "final 필드를 인자로 받는 생성자를 자동 생성하는 Lombok 어노테이션" },
    { term: "final 필드", desc: "생성 이후 재할당을 막아 의존성 안정성을 높이는 선언 방식" },
    { term: "passwordEncoder.matches()", desc: "입력 비밀번호와 저장된 해시 비밀번호의 일치 여부를 검증하는 메서드" },
    { term: "DTO -> Entity 변환", desc: "입력 객체를 도메인 저장 가능한 엔티티로 바꾸는 과정" },
    { term: "Builder 패턴", desc: "필드 의도를 명확히 하며 객체를 안전하게 생성하는 패턴" },
    { term: "업무 규칙 검증", desc: "중복 확인, 권한 확인 등 도메인 제약을 서비스에서 처리하는 원칙" },
    { term: "예외 처리", desc: "규칙 위반 상황을 상위 계층으로 명확히 전달하는 방식" },
    { term: "stream()", desc: "컬렉션 데이터를 함수형으로 처리하기 위한 스트림 시작 메서드" },
    { term: "map()", desc: "각 원소를 다른 형태로 변환하는 스트림 연산" },
    { term: "collect(toList())", desc: "스트림 처리 결과를 리스트로 수집하는 연산" },
    { term: "Lambda", desc: "간결한 함수형 표현식으로 변환/필터 로직을 작성하는 문법" },
    { term: "계층 분리", desc: "Controller와 Service 책임을 분리해 유지보수성을 높이는 설계 원칙" },
    { term: "트랜잭션 경계", desc: "저장/수정/삭제 단위를 서비스 메서드에서 묶어 관리하는 개념" },
    { term: "파일 업로드 오케스트레이션", desc: "파일 저장과 엔티티 저장 순서를 서비스에서 조합하는 처리 방식" },
    { term: "서비스 테스트 용이성", desc: "핵심 로직을 UI와 분리해 검증하기 쉬워지는 장점" }
  ],
  5: [
    { term: "Controller", desc: "웹 요청 진입점으로 요청을 받아 응답을 구성하는 계층" },
    { term: "@Controller", desc: "뷰 템플릿 기반 MVC 컨트롤러를 선언하는 어노테이션" },
    { term: "@GetMapping", desc: "HTTP GET 요청 URL을 메서드에 매핑하는 어노테이션" },
    { term: "@PostMapping", desc: "HTTP POST 요청(URL+본문)을 메서드에 매핑하는 어노테이션" },
    { term: "Model", desc: "컨트롤러에서 뷰로 전달할 데이터를 담는 객체" },
    { term: "return \"viewName\"", desc: "렌더링할 템플릿 이름을 반환하는 MVC 패턴" },
    { term: "redirect:/path", desc: "브라우저가 다른 URL로 다시 요청하도록 지시하는 응답 패턴" },
    { term: "@RequestParam", desc: "쿼리스트링/폼 파라미터를 메서드 인자로 바인딩하는 어노테이션" },
    { term: "@PathVariable", desc: "URL 경로 변수 값을 메서드 인자로 바인딩하는 어노테이션" },
    { term: "@ResponseBody", desc: "뷰가 아닌 데이터(JSON/텍스트)를 응답 본문으로 반환하는 방식" },
    { term: "@RestController", desc: "모든 메서드에 @ResponseBody가 적용된 컨트롤러 선언 방식" },
    { term: "세션 로그인", desc: "인증 성공 사용자 정보를 HttpSession에 저장해 상태를 유지하는 방식" },
    { term: "session.invalidate()", desc: "로그아웃 시 세션을 무효화해 인증 상태를 제거하는 메서드" },
    { term: "GET", desc: "주로 데이터 조회에 사용하는 멱등성 중심 HTTP 메서드" },
    { term: "POST", desc: "주로 데이터 생성/변경 요청에 사용하는 HTTP 메서드" },
    { term: "AJAX 응답", desc: "페이지 전환 없이 비동기 요청에 JSON/텍스트를 반환하는 응답 방식" },
    { term: "PRG 패턴", desc: "Post-Redirect-Get으로 중복 제출을 줄이는 웹 처리 패턴" },
    { term: "URL 자원 중심 설계", desc: "동사보다 리소스 중심 경로(/tour/{id})를 사용하는 설계" },
    { term: "입력 DTO 바인딩", desc: "요청 데이터를 별도 DTO로 받아 계층 계약을 명확히 하는 방식" },
    { term: "Controller-Service 협력", desc: "입출력은 컨트롤러, 비즈니스 규칙은 서비스로 분리하는 구조" }
  ],
  6: [
    { term: "DTO", desc: "계층 간 데이터 전달 전용으로 사용하는 객체" },
    { term: "Entity vs DTO 분리", desc: "도메인 모델 보호와 API 계약 유연성을 확보하는 설계 원칙" },
    { term: "Form DTO", desc: "사용자 입력값 수신을 위한 요청 전용 DTO" },
    { term: "Response DTO", desc: "클라이언트에 필요한 데이터만 반환하기 위한 응답 전용 DTO" },
    { term: "@Valid", desc: "요청 바인딩 시 Bean Validation 검증을 활성화하는 어노테이션" },
    { term: "BindingResult", desc: "검증 오류 결과를 담아 분기 처리하는 객체" },
    { term: "@NotBlank", desc: "문자열 null/빈값/공백 입력을 허용하지 않는 검증 규칙" },
    { term: "@Email", desc: "이메일 형식 여부를 검사하는 검증 규칙" },
    { term: "@Size", desc: "문자열/컬렉션 길이 최소·최대 범위를 검사하는 검증 규칙" },
    { term: "@Min/@Max", desc: "숫자 필드의 허용 범위를 검사하는 검증 규칙" },
    { term: "검증 메시지", desc: "입력 오류 원인을 사용자에게 명확히 전달하는 피드백" },
    { term: "요청 DTO 변환", desc: "컨트롤러 입력 DTO를 서비스에서 엔티티로 변환하는 처리" },
    { term: "응답 DTO 조합", desc: "엔티티 여러 개 정보를 화면/API 목적에 맞게 가공해 반환하는 방식" },
    { term: "민감정보 차단", desc: "응답 DTO로 비밀번호 등 내부 필드 노출을 방지하는 설계" },
    { term: "필드 최소화", desc: "DTO에 실제 필요한 필드만 담아 결합도를 낮추는 원칙" },
    { term: "API 계약", desc: "요청/응답 데이터 구조를 명확히 정의해 변경 충격을 줄이는 약속" },
    { term: "입력 검증 우선", desc: "비즈니스 처리 전에 잘못된 입력을 빠르게 차단하는 전략" },
    { term: "파일 업로드 DTO", desc: "MultipartFile 필드를 포함해 파일 입력을 받는 DTO 형태" },
    { term: "명명 규칙", desc: "Form/Response 등 목적이 드러나는 DTO 이름을 사용하는 관례" },
    { term: "DTO 중심 유지보수", desc: "화면/API 요구 변경 시 도메인 영향 범위를 줄이는 장점" }
  ],
  7: [
    { term: "@Configuration", desc: "스프링 설정 클래스임을 선언하는 어노테이션" },
    { term: "@Bean", desc: "메서드 반환 객체를 스프링 컨테이너에 빈으로 등록하는 어노테이션" },
    { term: "@Value", desc: "application.yml/properties의 설정값을 주입하는 어노테이션" },
    { term: "FileConfig", desc: "파일 업로드 경로 같은 설정값을 객체로 관리하는 구성 클래스" },
    { term: "PasswordEncoder", desc: "비밀번호 해시 생성 및 검증을 담당하는 보안 컴포넌트" },
    { term: "BCryptPasswordEncoder", desc: "BCrypt 알고리즘 기반 비밀번호 인코더 구현체" },
    { term: "matches(raw, encoded)", desc: "입력 평문과 저장 해시의 일치 여부를 확인하는 검증 방식" },
    { term: "HandlerInterceptor", desc: "요청 전후 공통 처리를 위한 웹 인터셉터 인터페이스" },
    { term: "preHandle()", desc: "컨트롤러 실행 전 인증/인가 등 선처리를 수행하는 인터셉터 메서드" },
    { term: "return false", desc: "인터셉터에서 요청 흐름을 중단해 컨트롤러 진입을 차단하는 결과" },
    { term: "WebMvcConfigurer", desc: "인터셉터/리소스 핸들러 등 웹 MVC 동작을 커스터마이징하는 인터페이스" },
    { term: "addInterceptors()", desc: "인터셉터를 등록하고 적용 경로를 설정하는 메서드" },
    { term: "addPathPatterns(\"/**\")", desc: "모든 URL 경로에 인터셉터를 적용하는 설정" },
    { term: "excludePathPatterns()", desc: "로그인/정적파일 등 인터셉터 제외 경로를 지정하는 설정" },
    { term: "order()", desc: "여러 인터셉터의 실행 우선순위를 정하는 설정" },
    { term: "session.timeout", desc: "세션 유효 시간 만료 기준을 지정하는 설정 키" },
    { term: "cookie.http-only", desc: "자바스크립트의 쿠키 접근을 막아 XSS 위험을 줄이는 설정" },
    { term: "@EnableJpaAuditing", desc: "엔티티 생성/수정 시간 감사 기능을 활성화하는 어노테이션" },
    { term: "@CreatedDate", desc: "엔티티 생성 시각을 자동 저장하는 감사 필드 어노테이션" },
    { term: "@LastModifiedDate", desc: "엔티티 수정 시각을 자동 저장하는 감사 필드 어노테이션" }
  ],
  8: [
    { term: "Thymeleaf", desc: "서버에서 모델 데이터를 HTML에 바인딩해 렌더링하는 템플릿 엔진" },
    { term: "templates/", desc: "Spring Boot에서 Thymeleaf 템플릿 파일을 두는 기본 경로" },
    { term: "th:text", desc: "표현식 결과를 태그 본문 텍스트로 출력하는 속성" },
    { term: "th:href", desc: "링크 URL을 동적으로 생성하는 속성" },
    { term: "th:src", desc: "이미지/스크립트 등 리소스 경로를 동적으로 생성하는 속성" },
    { term: "th:each", desc: "컬렉션 데이터를 반복 렌더링하는 속성" },
    { term: "stat.index", desc: "th:each 반복 상태에서 0부터 시작하는 인덱스 값" },
    { term: "stat.count", desc: "th:each 반복 상태에서 1부터 시작하는 순번 값" },
    { term: "stat.last", desc: "th:each 반복 상태에서 마지막 항목 여부를 나타내는 값" },
    { term: "th:if", desc: "조건이 참일 때만 요소를 렌더링하는 속성" },
    { term: "th:unless", desc: "조건이 거짓일 때만 요소를 렌더링하는 속성" },
    { term: "th:switch/th:case", desc: "값에 따라 분기 렌더링을 수행하는 속성 조합" },
    { term: "th:object", desc: "폼 바인딩의 기준 객체를 지정하는 속성" },
    { term: "th:field", desc: "폼 필드와 DTO 속성을 자동 바인딩하는 속성" },
    { term: "th:errors", desc: "검증 오류 메시지를 출력하는 속성" },
    { term: "#fields.hasErrors()", desc: "특정 폼 필드의 검증 오류 존재 여부를 확인하는 함수" },
    { term: "${session.loginMember}", desc: "세션에 저장된 로그인 사용자 정보를 참조하는 표현식" },
    { term: "safe navigation (?.)", desc: "null 가능 객체 접근 시 예외를 피하는 안전 접근 문법" },
    { term: "multipart/form-data", desc: "파일 업로드 폼 전송에 필요한 인코딩 타입" },
    { term: "CSRF 토큰", desc: "위조 요청 방지를 위해 폼 전송 시 함께 보내는 보안 토큰" }
  ],
  9: [
    { term: "Lombok", desc: "반복되는 보일러플레이트 코드를 자동 생성해 생산성을 높이는 라이브러리" },
    { term: "@Getter", desc: "필드의 getter 메서드를 자동 생성하는 어노테이션" },
    { term: "@Setter", desc: "필드의 setter 메서드를 자동 생성하는 어노테이션" },
    { term: "@NoArgsConstructor", desc: "기본 생성자를 자동 생성하는 어노테이션" },
    { term: "@AllArgsConstructor", desc: "모든 필드를 받는 생성자를 자동 생성하는 어노테이션" },
    { term: "@RequiredArgsConstructor", desc: "final/@NonNull 필드를 받는 생성자를 자동 생성하는 어노테이션" },
    { term: "@Builder", desc: "가독성 높은 빌더 패턴 객체 생성을 지원하는 어노테이션" },
    { term: "@Data", desc: "getter/setter/toString/equals/hashCode 등을 한 번에 생성하는 어노테이션" },
    { term: "@Slf4j", desc: "로깅용 log 객체를 자동 생성하는 Lombok 어노테이션" },
    { term: "log.info(\"... {}\", v)", desc: "플레이스홀더 기반으로 가독성 있게 로그를 출력하는 방식" },
    { term: "MultipartFile", desc: "폼으로 전송된 파일 데이터를 받는 스프링 타입" },
    { term: "FileUploadUtil", desc: "파일 저장 공통 로직을 분리해 재사용하는 유틸리티 클래스" },
    { term: "UUID.randomUUID()", desc: "고유 파일명을 생성해 업로드 파일명 충돌을 방지하는 방법" },
    { term: "createDirectories()", desc: "파일 저장 전 대상 디렉터리를 보장하는 파일 API 호출" },
    { term: "transferTo()", desc: "MultipartFile을 실제 파일 경로에 저장하는 메서드" },
    { term: "RatingUtil.round()", desc: "평균 평점을 소수점 한 자리 등 규칙에 맞게 반올림하는 유틸 함수" },
    { term: "ValidationUtil.validateRating()", desc: "별점 범위(예: 1~5) 유효성을 검사하는 공통 검증 함수" },
    { term: "유틸리티 클래스", desc: "도메인과 분리된 공통 기능을 모아 중복을 줄이는 설계 방식" },
    { term: "logging.level", desc: "패키지별 로그 출력 레벨을 제어하는 설정" },
    { term: "enctype='multipart/form-data'", desc: "브라우저 폼에서 파일을 서버로 전송하기 위한 필수 설정" }
  ],
  10: [
    { term: "전체 아키텍처", desc: "Controller-Service-Repository-Entity-View가 협력하는 계층 구조" },
    { term: "요청 처리 흐름", desc: "요청 수신 -> 검증/비즈니스 처리 -> DB 반영 -> 응답 반환의 일련 과정" },
    { term: "계층 분리 원칙", desc: "입출력, 비즈니스, 데이터 접근 책임을 분리해 결합도를 낮추는 원칙" },
    { term: "Tour 프로젝트", desc: "관광지 등록/조회 중심으로 실습하는 도메인 예제 애플리케이션" },
    { term: "Demo 프로젝트", desc: "회원/게시판 흐름을 통해 인증·권한까지 다루는 학습용 애플리케이션" },
    { term: "핵심 어노테이션 정리", desc: "@Controller, @Service, @Repository, @Entity 등 역할별 선언 집합" },
    { term: "보안 기본 원칙", desc: "비밀번호 해시 저장, 인증/인가 검증, 세션 보호를 지키는 원칙" },
    { term: "검증 전략", desc: "요청 단계의 DTO 검증 + 서비스 단계의 비즈니스 검증을 함께 적용하는 방식" },
    { term: "예외 처리 전략", desc: "실패 원인을 명확히 전달하고 사용자/개발자 모두 이해 가능한 처리 방식" },
    { term: "트랜잭션 전략", desc: "데이터 변경 단위를 서비스 메서드 경계로 묶어 정합성을 유지하는 전략" },
    { term: "DTO 전략", desc: "요청/응답 모델을 분리해 외부 계약과 내부 도메인을 분리하는 전략" },
    { term: "Thymeleaf 전략", desc: "뷰는 표현 중심, 비즈니스 로직은 백엔드 계층에 두는 역할 분리 전략" },
    { term: "Repository 전략", desc: "메서드명 쿼리와 @Query를 상황에 맞게 조합해 데이터 접근을 구성하는 전략" },
    { term: "인터셉터 전략", desc: "공통 인증/권한 체크를 요청 진입 지점에서 일괄 처리하는 전략" },
    { term: "로그 전략", desc: "환경별 로그 레벨을 구분해 진단 가능성과 운영 안정성을 확보하는 전략" },
    { term: "테스트 전략", desc: "단위/통합 테스트로 핵심 흐름 회귀를 방지하는 품질 확보 방식" },
    { term: "페이지네이션", desc: "Pageable/Page를 이용해 대량 목록을 성능 친화적으로 조회하는 기법" },
    { term: "API 확장", desc: "MVC 화면 중심 구조를 REST API 구조로 확장해 클라이언트 다양성을 확보하는 방향" },
    { term: "배포 준비", desc: "환경 분리, 보안 설정, 데이터 마이그레이션을 점검해 운영 안정성을 높이는 단계" },
    { term: "학습 최종 목표", desc: "요청이 시스템을 통과하는 전체 흐름을 스스로 설명하고 구현할 수 있는 상태" }
  ]
};

function buildChapterQuestions(items) {
  return items.map((item, idx) => {
    const wrong = [];
    let step = 1;
    while (wrong.length < 3) {
      const candidate = items[(idx + step) % items.length].desc;
      if (candidate !== item.desc && !wrong.includes(candidate)) {
        wrong.push(candidate);
      }
      step += 1;
    }

    const baseOpts = [item.desc, ...wrong];
    const shift = idx % 4;
    const opts = [
      baseOpts[(0 + shift) % 4],
      baseOpts[(1 + shift) % 4],
      baseOpts[(2 + shift) % 4],
      baseOpts[(3 + shift) % 4]
    ];
    const ans = (4 - shift) % 4;

    return {
      q: "다음 중 '" + item.term + "'에 대한 설명으로 가장 알맞은 것은?",
      opts,
      ans,
      exp: item.desc
    };
  });
}

const QUIZ_DATA = {};
Object.keys(CHAPTER_TERMS).forEach((ch) => {
  QUIZ_DATA[ch] = buildChapterQuestions(CHAPTER_TERMS[ch]);
});
