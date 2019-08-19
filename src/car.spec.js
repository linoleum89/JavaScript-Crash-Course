import Car from './car';

const runTests = function() {
    let pass = 0;
    let fail = 0;
    function assertThat(name, prop) {
        return {
            pass,
            fail,
            isDefined: () => {
                if (typeof prop !== undefined && prop !== "") {
                    pass++;
                    console.info("✅ Test passes: ", name);
                    return;
                }
                fail++;
                console.error("❌ Test failed: ", name);
                return;
            }
        }
    }
    
    const car = new Car({});
    
    assertThat("Car has an id", car.id).isDefined();
    assertThat("Car has an name", car.name).isDefined();
    assertThat("Car has a brand", car.brand).isDefined();

    console.warn(pass + " tests passes");
    console.warn(fail + " tests failed");
}

export default runTests;