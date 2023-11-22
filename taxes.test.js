
// JASMINE EXAMPLE TEST

// --------------------------------------------------------------

// it('should fail this test',function(){
//     expect(1+1).toEqual(3);
// })

// ----------------------------------------------------------------------------------------------------------------

//      REAL JASMINE TEST

// --------------------------------------------------------------

it('should calculate lower-bracket taxes', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
  });
  
  it('should calculate higher-bracket taxes', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });

// ----------------------------------------------------------------------------------------------------------------

//      "DESCRIBE" TEST

// --------------------------------------------------------------

// describe("Calculating taxes owed", function(){
//     it('should calculate lower-bracket taxes', function () {
//         expect(calculateTaxes(10000)).toEqual(1500);
//         expect(calculateTaxes(20000)).toEqual(3000);
//       });
      
//       it('should calculate higher-bracket taxes', function () {
//         expect(calculateTaxes(50000)).toEqual(12500);
//         expect(calculateTaxes(80000)).toEqual(20000);
//       });
// })

// ----------------------------------------------------------------------------------------------------------------

//      TEST CLEAN-UP EXAMPLE

// --------------------------------------------------------------

describe('submitForm() tests', () => {
  it('saves input value to "names" array',() =>{
    nameInput.value='Mark';
    submitForm();
    expect(names.length).toBe(1);
    expect(names).toContain('Mark');
  })
  afterEach(function(){
    nameInput.value='';
    names=[];
  })
})
