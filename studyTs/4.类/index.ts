{
  class Greeter {
    greeting: string
    constructor(message: string) {
      this.greeting = message
    }
    greet () {
      return `hello, ${this.greeting}`
    }
  }

  let greeter = new Greeter('123!')
  console.log(greeter.greet())
}

// 继承
{
  class Animal {
    move (distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m`)
    }
  }

  class Dog extends Animal {
    bark () {
      console.log('Woof! Woof!')
    }
  }

  const dog = new Dog()
  dog.bark()
  dog.move(10)
}

{
  class Animal {
    name: string
    constructor (theName: string) {
      this.name = theName
    }

    move (distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m`)
    }
  }

  class Snake extends Animal {
    constructor (name: string) {
      super(name)
    }

    move (distanceInMeters = 5) {
      console.log('Slithering...')
      super.move(distanceInMeters)
    }
  }

  class Horse extends Animal {
    constructor (name: string) {
      super(name)
    }

    move (distanceInMeters = 45) {
      console.log('Galloping...')
      super.move(distanceInMeters)
    }
  }

  let sam = new Snake('sammy the python')
  let tom: Animal = new Horse('tommy thr Palomino')

  sam.move()
  tom.move(34)
}

{
  // 公共 私有修饰符
  class Animal {
    public name: string
    private age: number = 10
    protected text: string = 'text'
    public constructor (theName: string) {
      this.name = theName
    }
    public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m`)
    }
  }

  let dog = new Animal('dog')
  console.log(dog)
  // 私有 不能直接访问
  // console.log(dog.age)
  // protected 可以在子类访问
  // console.log(dog.text)
}
