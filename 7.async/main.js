const testCase = () => {
    const options = {hour: 'numeric', minute: 'numeric'};
    const clock = new AlarmClock();
    clock.addClock(
        new Date().toLocaleTimeString('ru', options),
        () => console.log("Пора вставать!"),
        1
    );
    clock.addClock(
        new Date(Date.now() + 60000).toLocaleTimeString('ru', options),
        () => {
            console.log("Давай, вставай!");
            clock.removeClock(2);
        },
        2
    );
    // clock.addClock(
    //     new Date(Date.now() + 60000).toLocaleTimeString('ru', options),
    //     () => console.log("Иди умываться!")
    // );
    clock.addClock(
        new Date(Date.now() + 120000).toLocaleTimeString('ru', options),
        () => {
            console.log("Вставай, а то проспишь!");
            clock.clearAlarms();
            clock.printAlarms();
        },
        3
    );
    // clock.addClock(
    //     new Date(Date.now() + 120000).toLocaleTimeString('ru', options),
    //     () => console.log("Вставай, а то проспишь!"),
    //     1
    // );

    clock.printAlarms();

    clock.start();
}

testCase();