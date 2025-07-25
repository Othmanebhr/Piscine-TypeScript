let age = 24;
let userName = "othmane";
let isStudent = true;
let score = [6, 7, 8];
let settings = ["othmane", 54];
let anything = "anything";
let notSure = "Unknown value";

console.log("Value = ", age, userName, isStudent, score, settings, anything, notSure);

/*version Ts */
/*
let age: number = 24;
let userName: string = "othmane";
let isStudent: boolean = true;
let score: number[] = [6, 7, 8];
let settings: [string, number] = ["othmane", 54];
let anything: any = "anything";
let notSure: unknown = "Unknown value";
let role: 'Admin' | 'role' = "Admin";

console.log("Value = ", age, userName, isStudent, score, settings, anything, notSure, role);
*/


/*
let: let permet de déclarer une variable modifiable (qu’on peut réassigner),
avec une portée de bloc (scope local au bloc {}).

| Mot-clé | Modifiable ? | Portée        | Redéclaration dans le même bloc |
| ------- | ------------ | ------------- | ------------------------------- |
| `var`   | ✅ Oui       | Fonctionnelle | ✅ Oui                          |
| `let`   | ✅ Oui       | Bloc (`{}`)   | ❌ Non                          |
| `const` | ❌ Non       | Bloc (`{}`)   | ❌ Non                          |
*/