# indian-commerce-numbers
Various Utilities for commerce applications of numbers.

## Installation
`npm install indian-commerce-numbers --save`

## Usage
```javascript
// import functions
import { inWords, separate } from 'indian-commerce-numbers';

inWords(111257364578.78);
/*Returns => Eleven Thousand, One Hundred, Twenty Five, Crore, Seventy Three Lakh, Sixty Four Thousand, Five Hundred, Seventy Eight Rupees And Seventy Eight Paise Only*/

separate(123456.78);
/*Returns => 1,23,456.78*/
```

### Advanced Usage
#### 1. inWords
```javascript
// provide options object as second argument
// e.g
const options ={
    major_currency: 'Dollars',
    minor_currency: 'Cents',
    textin: 'upper',
}
inWords(123455678.00, options)
// TWELVE, CRORE, THIRTY FOUR LAKH, FIFTY FIVE THOUSAND, SIX HUNDRED, SEVENTY EIGHT DOLLARS AND FIFTY CENTS ONLY
```
All available options with defaults -
```javascript
{
    major_currency: 'Rupees',
    minor_currency: 'Paise',
    suffix: 'Only',
    prefix: '',
    separator: ',',
    textin: '',
  }
```
for `textin` possible options are `upper` for UPPER CASE and `lower` for lower case. default is `''` for Title Case.

#### 2. separate
 ```javascript
 const object = {
    suffix: '/-',
    prefix: '₹',
  }
  separate(123456.78, object) // ₹1,23,456.78/-
 ```
 All available options with defaults -
 ```javascript
 {
    suffix: '',
    prefix: '',
    separator: ',',
    format: [2, 3],
    decimalSymbol: '.',
  }
 ```
 for `format` option Array of two numbers is required like `[2, 3]`.
 first value `2` represents seperation gap for all except right most digits and
 second value `3` represents seperation gap for right most digits.
# For Feature requests and error reporting
create an issue on github repository or contact directly to ashwinbandeukd@gmail.com
