// 1) 객체, 클래스 간단 소개
// key:value, property:value,
// 객체 리터럴 표기법, 사용자 정의 데이터 그룹화
const job = {
  title: "Devleoper",
  location: "New York",
  salary: 50000,
};
// 객체 내 속성 접근, dot notation
console.log(job.title);

// 클래스
new Date(); // 날짜를 설명하는 객체 생성, 현재 날짜와 타임스탬프 표시
new Date().toISOString(); // 객체의 메소드 호출, 표준화된 문자열 표현
console.log(new Date().toISOString()); // 출력

// 'new' :
// date() : 생성자 함수 또는 클래스

// 만약, 중복된 객체가 필요한 경우? 반복 작업?
const job2 = {
  title: "Cook",
  location: "Munich",
  salary: 35000,
};

// date()와 같이 표준화된 블루프린트 존재, (유틸리티 메서드'toISOString()' 포함)
// 자신만의 블루프린트 정의 (반복작업방지)
// 클래스는 대문자로 시작
class Job3 {
  constructor(jobTitle,place,salary) {
    // 클래스가 호출될 때, 실행 될 메소드 추가
    // 'this'는 '생성될 객체'를 참조
    this.title = jobTitle; 
    this.location = place;
    this.salary = salary;
  }
}
// 클래스 객체(인스턴스) 생성, 클래스의 constructor 메서드가 실행됨
const developer = new Job3('Developer', 'New York', 50000); 
const cook = new Job3('Cook', 'Munich', 35000); 
console.log(developer);

