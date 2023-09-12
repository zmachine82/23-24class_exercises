class Experiment {
  minimumAge = 18;
  maximumAge = 65;
  perform(person) {
    console.error("no experiment to perform");
  }
}

export class AgeAccelerationExperiment extends Experiment {
    static name = 'Age acceleration'
  perform(person) {
    console.log(
      `Woah, ${person.name}, you suddenly look at least ${person.age * 2} now`
    );
  }
}

export class FountainOfYouthExperiment extends Experiment {
    static name = 'Fountain of Youth'
  minimumAge = 50;
  maximumAge = 110;
  perform(person) {
    console.log(
      `Woah, ${person.name}, you suddenly look at least ${Math.floor(
        person.age / 2
      )} now`
    );
  }
}

export class ExplosiveExperiment extends Experiment {
    static name = 'Explosive'
  minimumAge = 18;
  maximumAge = 110;
  perform(person) {
    console.log(
      `Oops, ${person.name}, you suddenly exploded, sorry about that`
    );
  }
}

export class ExperimentFactory {
  static create(experimentName) {
    if (experimentName === AgeAccelerationExperiment.name) {
      return new AgeAccelerationExperiment();
    } else if (experimentName === FountainOfYouthExperiment.name) {
      return new FountainOfYouthExperiment();
    } else if (experimentName === ExplosiveExperiment.name) {
      return new ExplosiveExperiment();
    }
    const experiments = [
      new AgeAccelerationExperiment(),
      new FountainOfYouthExperiment(),
      new ExplosiveExperiment(),
    ];
    return experiments[Math.floor(Math.random() * experiments.length)];
  }
}
