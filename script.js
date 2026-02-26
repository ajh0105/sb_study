const lectures = [
  {
    path: "tour/TourApplication.java",
    title: "애플리케이션 시작점",
    role: "프로젝트 부팅/컴포넌트 스캔 시작",
    tags: ["@SpringBootApplication", "main"],
    code: `@SpringBootApplication\npublic class TourApplication {\n  public static void main(String[] args) {\n    SpringApplication.run(TourApplication.class, args);\n  }\n}`,
    annotations: [
      "@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan 합성 어노테이션",
      "컴포넌트 스캔 기준점이 되므로 패키지 루트를 잘 잡아야 하위 클래스가 Bean 등록됨"
    ],
    logic: [
      "JVM 실행 → main() 진입",
      "SpringApplication.run()이 IoC 컨테이너 생성",
      "Controller/Service/Repository Bean 생성 후 서버 기동"
    ],
    connects: ["모든 계층 클래스가 이 시작점 기준으로 스캔/등록됨"],
    mission: "패키지 위치를 의도적으로 바꿔 Bean 인식 실패를 재현해 보세요."
  },
  {
    path: "tour/config/SecurityConfig.java",
    title: "보안 설정 클래스",
    role: "URL 접근 정책/로그인 정책 정의",
    tags: ["@Configuration", "SecurityFilterChain"],
    code: `@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n  @Bean\n  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http.authorizeHttpRequests(auth -> auth\n      .requestMatchers("/tour/**", "/css/**").permitAll()\n      .anyRequest().authenticated());\n    return http.build();\n  }\n}`,
    annotations: [
      "@Configuration: 설정 Bean 등록 클래스",
      "@EnableWebSecurity: Spring Security 활성화"
    ],
    logic: ["요청 진입 → 필터 체인 → URL 규칙 검사 → 허용/차단"],
    connects: ["Controller 요청 앞단에서 동작", "템플릿 static 리소스 접근 정책과 연결"],
    mission: "permitAll 경로를 줄여서 어떤 페이지가 막히는지 확인하세요."
  },
  {
    path: "tour/entity/Tour.java",
    title: "투어 게시글 엔티티",
    role: "투어 게시글 테이블 매핑",
    tags: ["@Entity", "@OneToMany"],
    code: `@Entity\n@Getter\n@NoArgsConstructor\npublic class Tour {\n  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n\n  @Column(nullable = false, length = 120)\n  private String title;\n\n  @Column(nullable = false, columnDefinition = "TEXT")\n  private String description;\n\n  @OneToMany(mappedBy = "tour", cascade = CascadeType.ALL, orphanRemoval = true)\n  private List<Review> reviews = new ArrayList<>();\n}`,
    annotations: [
      "@Entity: DB 테이블과 매핑",
      "@OneToMany(mappedBy='tour'): Tour(1)-Review(N) 역방향 컬렉션",
      "cascade/orphanRemoval: 부모 저장·삭제 시 자식 리뷰 동기화"
    ],
    logic: ["Tour 생성 → 저장 → Review 연관 시 FK(tour_id)로 연결"],
    connects: ["Review 엔티티와 양방향 관계", "TourRepository의 CRUD 대상"],
    mission: "cascade 제거 후 리뷰 저장 동작이 어떻게 달라지는지 비교하세요."
  },
  {
    path: "tour/entity/Review.java",
    title: "리뷰 엔티티",
    role: "투어 리뷰 데이터 매핑",
    tags: ["@Entity", "@ManyToOne", "@JoinColumn"],
    code: `@Entity\npublic class Review {\n  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n\n  @ManyToOne(fetch = FetchType.LAZY)\n  @JoinColumn(name = "tour_id", nullable = false)\n  private Tour tour;\n\n  @Column(nullable = false, length = 40)\n  private String writer;\n\n  @Column(nullable = false, length = 500)\n  private String content;\n}`,
    annotations: [
      "@ManyToOne(fetch=LAZY): 필요 시점에 Tour 조회(성능)",
      "@JoinColumn: FK 컬럼명을 명시해 스키마 가독성 확보"
    ],
    logic: ["리뷰 저장 시 반드시 Tour 참조 필요", "Tour 없으면 무결성 예외 발생"],
    connects: ["ReviewRepository/ReviewService에서 저장", "Tour 상세 화면과 연결"],
    mission: "fetch = EAGER로 바꿔 SQL 횟수 변화를 확인하세요."
  },
  {
    path: "tour/dto/TourCreateRequest.java",
    title: "투어 생성 요청 DTO",
    role: "입력 검증 + Controller 입력 모델",
    tags: ["record", "@NotBlank"],
    code: `public record TourCreateRequest(\n  @NotBlank(message = "제목은 필수") String title,\n  @NotBlank(message = "설명은 필수") String description\n) {}`,
    annotations: ["@NotBlank: 공백/빈 문자열 차단", "record: 불변 전달객체"],
    logic: ["폼 전송 → DTO 바인딩 → @Valid 검증 → Service 전달"],
    connects: ["TourController.create() 입력 타입", "TourService.createTour()와 연결"],
    mission: "@Size 제약을 추가해 최소 길이 검증을 적용하세요."
  },
  {
    path: "tour/dto/TourResponse.java",
    title: "투어 응답 DTO",
    role: "엔티티 노출 차단 + 화면/API 출력 모델",
    tags: ["record", "from()"],
    code: `public record TourResponse(Long id, String title, String description) {\n  public static TourResponse from(Tour tour) {\n    return new TourResponse(tour.getId(), tour.getTitle(), tour.getDescription());\n  }\n}`,
    annotations: ["정적 팩토리 from(): 변환 책임을 DTO 내부로 응집"],
    logic: ["Service에서 엔티티 조회", "응답 직전에 DTO로 변환"],
    connects: ["Controller 모델 전달 값", "템플릿/JSON 출력 형식과 직결"],
    mission: "리뷰 개수 필드를 추가해 from() 로직을 확장하세요."
  },
  {
    path: "tour/dto/ReviewCreateRequest.java",
    title: "리뷰 생성 요청 DTO",
    role: "리뷰 작성 폼 검증",
    tags: ["@NotBlank", "@Size"],
    code: `public record ReviewCreateRequest(\n  @NotBlank String writer,\n  @NotBlank @Size(max = 500) String content\n) {}`,
    annotations: ["@Size(max=500): DB 컬럼 길이와 일치시켜 오류 예방"],
    logic: ["상세 페이지 폼 → DTO 검증 → ReviewService.create()"],
    connects: ["ReviewController POST 요청과 연결"],
    mission: "writer에 패턴 제약을 넣어 한글/영문만 허용해보세요."
  },
  {
    path: "tour/repository/TourRepository.java",
    title: "투어 레포지토리",
    role: "Tour 엔티티 DB 접근",
    tags: ["extends JpaRepository"],
    code: `public interface TourRepository extends JpaRepository<Tour, Long> {\n  List<Tour> findByTitleContainingIgnoreCase(String keyword);\n}`,
    annotations: ["JpaRepository 상속만으로 CRUD 메서드 자동 제공"],
    logic: ["Service가 keyword 전달", "메서드 이름 파싱으로 LIKE 쿼리 실행"],
    connects: ["TourService.search()가 호출", "Controller 목록 검색과 연결"],
    mission: "정렬 조건이 포함된 메서드명을 추가해 보세요."
  },
  {
    path: "tour/repository/ReviewRepository.java",
    title: "리뷰 레포지토리",
    role: "Review 엔티티 조회/저장",
    tags: ["JpaRepository", "파생쿼리"],
    code: `public interface ReviewRepository extends JpaRepository<Review, Long> {\n  List<Review> findByTourIdOrderByIdDesc(Long tourId);\n}`,
    annotations: ["findByTourId...: FK 기준 조회 + 정렬"],
    logic: ["tourId로 리뷰 목록 조회", "상세 페이지 하단 렌더링"],
    connects: ["ReviewService.listByTour()와 연결"],
    mission: "페이징(Pageable) 메서드로 바꿔 성능을 개선해 보세요."
  },
  {
    path: "tour/service/TourService.java",
    title: "투어 서비스",
    role: "투어 생성/조회/검색 비즈니스 로직",
    tags: ["@Service", "@Transactional"],
    code: `@Service\n@RequiredArgsConstructor\n@Transactional(readOnly = true)\npublic class TourService {\n  private final TourRepository tourRepository;\n\n  @Transactional\n  public Long createTour(TourCreateRequest req) {\n    Tour tour = new Tour(req.title(), req.description());\n    return tourRepository.save(tour).getId();\n  }\n}`,
    annotations: [
      "@Service: 비즈니스 계층 Bean",
      "클래스 readOnly + 쓰기 메서드만 별도 @Transactional"
    ],
    logic: ["Controller 입력 수신", "검증/예외 처리", "Repository 저장", "DTO 변환 반환"],
    connects: ["TourController에서 호출", "TourRepository와 직접 연동"],
    mission: "없는 ID 조회 시 커스텀 예외를 도입해 보세요."
  },
  {
    path: "tour/service/ReviewService.java",
    title: "리뷰 서비스",
    role: "리뷰 생성/조회 로직",
    tags: ["@Service", "트랜잭션"],
    code: `@Service\n@RequiredArgsConstructor\npublic class ReviewService {\n  private final TourRepository tourRepository;\n  private final ReviewRepository reviewRepository;\n\n  @Transactional\n  public Long create(Long tourId, ReviewCreateRequest req) {\n    Tour tour = tourRepository.findById(tourId).orElseThrow();\n    Review review = new Review(tour, req.writer(), req.content());\n    return reviewRepository.save(review).getId();\n  }\n}`,
    annotations: ["두 Repository를 조합해 하나의 유스케이스 완성"],
    logic: ["tour 존재검증", "review 생성", "저장 후 id 반환"],
    connects: ["ReviewController POST 처리", "Tour 상세 페이지 갱신"],
    mission: "리뷰 수정/삭제 메서드를 추가해 보세요."
  },
  {
    path: "tour/controller/TourController.java",
    title: "투어 컨트롤러",
    role: "목록/상세/작성 폼 라우팅",
    tags: ["@Controller", "@GetMapping", "@PostMapping"],
    code: `@Controller\n@RequestMapping("/tour")\n@RequiredArgsConstructor\npublic class TourController {\n  private final TourService tourService;\n\n  @GetMapping\n  public String list(@RequestParam(required = false) String keyword, Model model) {\n    model.addAttribute("tours", tourService.search(keyword));\n    return "tour/list";\n  }\n}`,
    annotations: ["@Controller: 템플릿 렌더링 컨트롤러", "Model: view 전달 데이터 컨테이너"],
    logic: ["URL 매핑", "Service 호출", "Model 저장", "템플릿 반환"],
    connects: ["tour/list.html, tour/detail.html과 직접 연결"],
    mission: "GET/POST 분기와 redirect 흐름도를 직접 그려보세요."
  },
  {
    path: "tour/controller/ReviewController.java",
    title: "리뷰 컨트롤러",
    role: "상세 페이지 내 리뷰 등록 요청 처리",
    tags: ["@PostMapping", "@Valid"],
    code: `@Controller\n@RequestMapping("/tour/{tourId}/reviews")\n@RequiredArgsConstructor\npublic class ReviewController {\n  private final ReviewService reviewService;\n\n  @PostMapping\n  public String create(@PathVariable Long tourId, @Valid ReviewCreateRequest request) {\n    reviewService.create(tourId, request);\n    return "redirect:/tour/" + tourId;\n  }\n}`,
    annotations: ["@PathVariable: URL 경로 값 바인딩", "@Valid: 리뷰 폼 검증"],
    logic: ["폼 제출", "service 저장", "상세 페이지로 리다이렉트"],
    connects: ["tour/detail.html의 리뷰 폼 action과 연결"],
    mission: "검증 실패 시 에러메시지를 화면에 노출하도록 개선하세요."
  },
  {
    path: "templates/tour/list.html",
    title: "투어 목록 템플릿",
    role: "투어 카드/검색 UI 렌더링",
    tags: ["Thymeleaf", "th:each", "th:text"],
    code: `<form method="get" th:action="@{/tour}">\n  <input name="keyword" />\n  <button type="submit">검색</button>\n</form>\n\n<div th:each="tour : \${tours}">\n  <a th:href="@{|/tour/\${tour.id}|}" th:text="\${tour.title}"></a>\n</div>`,
    previewHtml: `<main style="font-family:sans-serif;padding:16px"><h2>투어 목록</h2><form style="margin-bottom:12px"><input placeholder="검색어" /><button type="button">검색</button></form><ul><li><a href="#">서울 야경 투어</a></li><li><a href="#">부산 미식 투어</a></li></ul></main>`,
    annotations: ["th:each로 서버 데이터 반복 렌더링", "th:href로 동적 URL 생성"],
    logic: ["Controller model(tours) 전달", "템플릿 반복출력", "상세 링크 이동"],
    connects: ["TourController.list() 결과 화면"],
    mission: "빈 목록일 때 안내 문구를 th:if로 표시하세요."
  },
  {
    path: "templates/tour/detail.html",
    title: "투어 상세 템플릿",
    role: "투어 상세 + 리뷰 목록 + 리뷰 폼",
    tags: ["th:text", "th:each", "form"],
    code: `<h1 th:text="\${tour.title}"></h1>\n<p th:text="\${tour.description}"></p>\n\n<div th:each="review : \${reviews}">\n  <b th:text="\${review.writer}"></b>\n  <p th:text="\${review.content}"></p>\n</div>\n\n<form th:action="@{|/tour/\${tour.id}/reviews|}" method="post">\n  <input name="writer" />\n  <textarea name="content"></textarea>\n  <button type="submit">리뷰등록</button>\n</form>`,
    previewHtml: `<main style="font-family:sans-serif;padding:16px"><h1>서울 야경 투어</h1><p>한강과 도심 야경을 함께 보는 코스</p><hr/><h3>리뷰</h3><div><b>민수</b><p>야경이 정말 예뻤어요!</p></div><div><b>지연</b><p>가이드 설명이 좋았습니다.</p></div><hr/><h3>리뷰 작성</h3><input placeholder="작성자"/><br/><textarea placeholder="내용"></textarea><br/><button type="button">리뷰등록</button></main>`,
    annotations: ["상세 데이터 + 연관 리뷰를 한 화면에서 조합 렌더링"],
    logic: ["TourController가 tour/reviews model 전달", "ReviewController로 POST"],
    connects: ["TourController.detail(), ReviewController.create() 양방향 연결점"],
    mission: "리뷰 작성 후 성공 메시지를 flash attribute로 추가해보세요."
  },
  {
    path: "templates/tour/form.html",
    title: "투어 생성 폼 템플릿",
    role: "투어 등록 입력 UI",
    tags: ["form", "입력 검증"],
    code: `<form th:action="@{/tour}" method="post">\n  <input name="title" placeholder="투어 제목" />\n  <textarea name="description" placeholder="투어 설명"></textarea>\n  <button type="submit">등록</button>\n</form>`,
    previewHtml: `<main style="font-family:sans-serif;padding:16px"><h2>투어 등록</h2><input placeholder="투어 제목" style="display:block;margin-bottom:8px"/><textarea placeholder="투어 설명" style="display:block;margin-bottom:8px"></textarea><button type="button">등록</button></main>`,
    annotations: ["POST /tour와 1:1 매핑", "입력 name이 DTO 필드와 동일해야 바인딩 성공"],
    logic: ["사용자 입력", "Controller 바인딩/검증", "Service 저장"],
    connects: ["TourController.create()의 시작점"],
    mission: "검증 실패 시 에러 문구를 필드 아래에 표시하세요."
  }
];

const quizzes = [
  { q: "Tour(1)-Review(N)에서 FK는 보통 어디에 있나요?", choices: ["tour 테이블", "review 테이블", "둘 다"], answer: 1, explain: "다대일의 N쪽(review)에 FK(tour_id)가 위치합니다." },
  { q: "Controller가 Repository를 직접 호출하지 않는 주된 이유는?", choices: ["속도가 느려서", "책임 분리/테스트 용이성", "문법 제한"], answer: 1, explain: "비즈니스 규칙은 Service에 모아야 재사용성과 유지보수가 좋아집니다." },
  { q: "th:each는 무엇을 위해 사용하나요?", choices: ["SQL 실행", "반복 렌더링", "트랜잭션 제어"], answer: 1, explain: "템플릿에서 목록 데이터를 반복 출력할 때 사용합니다." }
];

let current = 0;
let quizIndex = 0;
const treeEl = document.getElementById("fileTree");
const detailEl = document.getElementById("lectureDetail");
const progressEl = document.getElementById("progress");
const progressTextEl = document.getElementById("progressText");

function loadDone() {
  const raw = localStorage.getItem("tourFileCourseDone");
  return raw ? JSON.parse(raw) : [];
}
function saveDone(done) {
  localStorage.setItem("tourFileCourseDone", JSON.stringify(done));
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderTree() {
  const done = loadDone();
  treeEl.innerHTML = "";
  lectures.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = `file-item ${idx === current ? "active" : ""} ${done.includes(idx) ? "done" : ""}`;
    li.innerHTML = `<button type="button" data-index="${idx}">${item.path}</button>`;
    treeEl.appendChild(li);
  });
  progressEl.max = lectures.length;
  progressEl.value = done.length;
  progressTextEl.textContent = `${done.length} / ${lectures.length} 완료`;
}

function renderDetail() {
  const l = lectures[current];
  const isHtmlTemplate = l.path.endsWith(".html");
  const previewSection = isHtmlTemplate
    ? `
      <h3 class="section-title">실제 구동 화면 미리보기</h3>
      <p class="small">템플릿 HTML은 실제 화면 미리보기와 함께, 아래 코드 구조에서 원문 코드도 같이 확인할 수 있습니다.</p>
      <iframe class="template-preview" title="${l.path} preview" srcdoc="${(l.previewHtml || "").replace(/"/g, "&quot;")}"></iframe>
    `
    : "";

  detailEl.innerHTML = `
    <h2>${l.title}</h2>
    <p class="path">${l.path}</p>
    <p><strong>역할:</strong> ${l.role}</p>
    <div>${l.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>

    ${previewSection}

    <h3 class="section-title">코드 구조</h3>
    <pre><code>${escapeHtml(l.code)}</code></pre>

    <h3 class="section-title">어노테이션/문법 해설</h3>
    <ul>${l.annotations.map((a) => `<li>${a}</li>`).join("")}</ul>

    <h3 class="section-title">로직 순서</h3>
    <ol>${l.logic.map((x) => `<li>${x}</li>`).join("")}</ol>

    <h3 class="section-title">다른 파일과 연결</h3>
    <ul>${l.connects.map((c) => `<li>${c}</li>`).join("")}</ul>

    <p class="mission"><strong>실습 과제:</strong> ${l.mission}</p>
  `;
}

treeEl.addEventListener("click", (e) => {
  if (!(e.target instanceof HTMLButtonElement)) return;
  current = Number(e.target.dataset.index);
  renderTree();
  renderDetail();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (current > 0) current -= 1;
  renderTree();
  renderDetail();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (current < lectures.length - 1) current += 1;
  renderTree();
  renderDetail();
});

document.getElementById("completeBtn").addEventListener("click", () => {
  const done = loadDone();
  if (!done.includes(current)) {
    done.push(current);
    done.sort((a, b) => a - b);
    saveDone(done);
  }
  renderTree();
});

const quizBox = document.getElementById("quizBox");
function renderQuiz() {
  const q = quizzes[quizIndex];
  quizBox.innerHTML = `
    <h3>${q.q}</h3>
    ${q.choices.map((c, i) => `<button type="button" class="quiz-choice" data-i="${i}">${c}</button>`).join("")}
    <p id="quizFeedback">정답을 선택하세요.</p>
  `;
  quizBox.querySelectorAll(".quiz-choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const picked = Number(btn.dataset.i);
      quizBox.querySelectorAll(".quiz-choice").forEach((b, i) => {
        b.disabled = true;
        if (i === q.answer) b.classList.add("correct");
      });
      const fb = document.getElementById("quizFeedback");
      if (picked !== q.answer) {
        btn.classList.add("wrong");
        fb.textContent = `오답입니다. ${q.explain}`;
      } else {
        fb.textContent = `정답입니다. ${q.explain}`;
      }
    });
  });
}

document.getElementById("nextQuizBtn").addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizzes.length;
  renderQuiz();
});

renderTree();
renderDetail();
renderQuiz();
