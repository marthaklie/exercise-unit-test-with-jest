// Funciones de conversión
const fromEuroToDollar = (euros) => {
    return euros * 1.07;
  };
  
  const fromDollarToYen = (dollars) => {
    // 1 USD = 109.54 JPY
    return dollars * 109.54;
  };
  
  const fromYenToPound = (yens) => {
    // 1 JPY = 0.0067 GBP
    return yens * 0.0067;
  };
  
  // Pruebas
  test('One dollar should be 109.54 yen', () => {
    const expectedYen = 109.54;
    const yen = fromDollarToYen(1);
    expect(yen).toBe(expectedYen);
  });
  
  test('One yen should be 0.0067 pound', () => {
    const expectedPound = 0.0067;
    const pound = fromYenToPound(1);
    expect(pound).toBe(expectedPound);
  });
  