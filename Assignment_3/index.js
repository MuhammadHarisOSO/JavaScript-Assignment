// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input:not(input[type=submit])");
  const refresh_values = () => {
    for (const input of inputs) {
      window[input.name] = input.value;
    }
  };
  

  document.getElementById("submit").onclick = () => {
    refresh_values();
    main();
  };
});

  // write all your code here


class Tool {
  constructor(strength, type) {
      this.strength = strength;
      this.type = type;
  }
  setStrength(strength) {
      this.strength = strength;
  }
}

class Scissors extends Tool {
  constructor(strength) {
      super(strength, "s");
  }

  getType() {
      return this.type;
  }
  getStrength() {
      return this.strength;
  }

  Fight(tool){
      const CurrentTool = (Tools_Strength, tool) =>{
          if (tool.getType() == "r") return Tools_Strength / 2;

          else if (tool.getType() == "s") return Tools_Strength;
          
          else if (tool.getType() == "p") return Tools_Strength * 2;
      };

      if (CurrentTool(this.strength, tool) > tool.getStrength())
          return `${this.type} Wins.`;

      else if (CurrentTool(this.strength, tool) < tool.getStrength())
          return `${this.type} Lose.`;

      else if (CurrentTool(this.strength, tool) === tool.getStrength())
          return `${this.type} Tie.`;
  }
}

class Paper extends Tool {
  constructor(strength) {
      super(strength, "p");
  }

  getType() {
      return this.type;
  }
  getStrength() {
      return this.strength;
  }

  Fight(tool) {
      const CurrentTool = (Tools_Strength, tool) => {
          if (tool.getType() == "r") return Tools_Strength * 2;

          else if (tool.getType() == "s") return Tools_Strength / 2;

          else if (tool.getType() == "p") return Tools_Strength;
      };

      if (CurrentTool(this.strength, tool) > tool.getStrength())
          return `${this.type} Wins.`;

      else if (CurrentTool(this.strength, tool) < tool.getStrength())
          return `${this.type} Lose.`;

      else if (CurrentTool(this.strength, tool) === tool.getStrength())
          return `${this.type} Tie.`;
  }
}

class Rock extends Tool {
  constructor(strength) {
      super(strength, "r");
  }

  getType() {
      return this.type;
  }
  getStrength() {
      return this.strength;
  }

  Fight(tool) {
      const CurrentTool = (Tools_Strength, tool) => {
          if (tool.getType() == "r") return Tools_Strength;

          else if (tool.getType() == "s") return Tools_Strength * 2;

          else if (tool.getType() == "p") return Tools_Strength / 2;
      };

      if (CurrentTool(this.strength, tool) > tool.getStrength())
          return `${this.type} Wins.`;

      else if (CurrentTool(this.strength, tool) < tool.getStrength())
          return `${this.type} Lose.`;

      else if (CurrentTool(this.strength, tool) === tool.getStrength())
          return `${this.type} Tie.`;
  }
}

export default main;

function main() {
  const scissors = new Scissors(9);
  const paper = new Paper(0);
  const rock = new Rock(8);

  print(`${scissors.Fight(paper)}, ${paper.Fight(scissors)}`);

  print(`${paper.Fight(rock)}, ${rock.Fight(paper)}`);

  print(`${rock.Fight(scissors)}, ${scissors.Fight(rock)}`);
}