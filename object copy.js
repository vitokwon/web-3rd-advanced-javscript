// 1) 클래스와 메서드
class Job3 {
  // 블루프린트
  constructor(jobTitle, place, salary) {
    // 클래스가 호출될 때, 실행 될 메소드 추가
    // 'this'는 '생성될 객체(about to be created)'를 참조
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  // 메소드 생성
  describe() {
    // '생성된 객체(already created)'를 참조
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`
    );
  }
}
// 클래스 객체(인스턴스) 생성, 클래스의 constructor 메서드가 실행됨
const developer = new Job3("Developer", "New York", 50000);
const cook = new Job3("Cook", "Munich", 35000);
console.log(developer); // cook.describe();로 대체.

//this method 실행
developer.describe(); // I'm a Developer, I work in New York and I earn 50000
cook.describe(); // I'm a Cook, I work in Munich and I earn 35000

// 2) 객체 & 배열 구조화
// 개발도구에서 실행
const input = ["vito", "kwon"];

// 배열로 부터 두개의 상수 추출
const firstName = input[0];
const lastName = input[1];

// 배열 비구조화,(destructuring) 배열값을 상수(또는 변수)에 저장.
// first = vito, last = kwon
const [ first, last] = input; // 하나만 가져올 수도 있음.

// 객체 비구조화
const job = {title:'Developer', location: 'New York'}
const jobTitle = job.title;
const jobLocation = job.title;
const { title, location} = job; // 하나만 가져올 수도 있음.
const { title: JTitle} = job; // 속성:새이름 사용도 가능
