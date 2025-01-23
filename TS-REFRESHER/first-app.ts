let userName = "Hoang";

// Combining Types Union Types
let userID: string | number = "abc";
userID = 123;

// Object types
type User = {
  id: string | number;
  name: string;
  age: number;
  isAdmin: boolean;
};

let user: User;

user = {
  id: "abc",
  name: "Hoang",
  age: 30,
  isAdmin: true,
};

// Array types
let hobbies: string[];

hobbies = ["reading", "sleeping", "play video game"];

// {name: string; age: number}[]

// Function types
function add(a: number, b: number) {
  return a + b;
}

// Creating custom types / Type aliases
type AddFn = (x: number, y: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(1, 2, add);

// Interfaces
// Defined objec type
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@test.com",
};

// Có thể sử dụng `type` để defined bất cứ type nào khác object type
// `interface` hạn chế hơn chỉ dùng defined object và function type (tuy nhiên ko defined được union type)
// Sử dụng `interface` để defined object có 1 số ưu điểm
// - Bắt class kế thừa các thuộc tính của interface, khi này
// sau đó những fn khai báo sử dụng interface có thể đồng thời sử dụng class
class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(creds);
login(new AuthCredentials());
// - dễ dàng mở rộng (extendable), có thể redefined lại interface 1 cách dễ dàng
// ví dụ code 1 lib mà 1 số phần sử dụng interface đó có properties khác nhau
// interface Credentials {
//   mode: string;
// }
// let a: Credentials = {
//   email: "",
//   password: "",
//   mode: "",
// };

// Merge Types/Interfaces

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   username: string;
// };

// type AppAdmin = Admin & AppUser;

interface Admin {
  permissions: string[];
}

interface AppUser {
  username: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin = {
  permissions: [],
  username: "",
};

// Literal Types
let role: "admin" | "user" | "editor";

// Adding Type Guards
type Role = "admin" | "user" | "editor";

// Generic Types
let roles: Array<Role>;
roles = ["admin", "editor"];

// defined generic type
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

// defined generic function
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Hoang" },
//   { age: 30 }
// );
const newUser = merge({ name: "Hoang" }, { age: 30 });
newUser.age;
newUser.name;
