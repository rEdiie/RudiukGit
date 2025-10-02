const age = 45;
let category;

switch (true) {
    case (age >= 0 && age <= 12):
        category = 'Child';
        break;
    case (age >= 13 && age <= 17):
        category = 'Teenager';
        break;
    case (age >= 18 && age <= 59):
        category = 'Adult';
        break;
    case (age >= 60):
        category = 'Senior';
        break;
    default:
        category = 'Invalid age';
}

console.log('Age category:', category);
