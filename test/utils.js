
//method to left and right swipe on the screen based on coordinates
const swipeAction = async (Xcoordinate, Ycoordinate, direction) => {
  //get device width and height
  const dimension = await driver.getWindowSize();
  const deviceHeight = dimension.height;
  const deviceWidth = dimension.width;
  console.log("Height x Width of device is: " + deviceHeight + " x " + deviceWidth);

  let startX, startY, endX, endY;

  switch (direction) {
    case "Left":
      console.log("Swipe Right to Left");
      //define starting and ending X and Y coordinates
      startX = deviceWidth - Xcoordinate;
      startY = Ycoordinate;
      endX = Xcoordinate;
      endY = Ycoordinate;
      //perform swipe from right to left
      await driver.touchPerform([{
        action: 'longPress',
        options: {
          x: startX,
          y: startY
        }
      }, {
        action: 'moveTo',
        options: {
          x: endX,
          y: endY
        }
      }, {
        action: 'release'
      }]);
      break;

    case "Right":
      console.log("Swipe Left to Right");
      //define starting X and Y coordinates
      startX = Xcoordinate;
      startY = Ycoordinate;
      endX = deviceWidth - Xcoordinate;
      endY = Ycoordinate;
      //perform swipe from left to right
      await driver.touchPerform([{
        action: 'longPress',
        options: {
          x: startX,
          y: startY
        }
      }, {
        action: 'moveTo',
        options: {
          x: endX,
          y: endY
        }
      }, {
        action: 'release'
      }]);
      break;

      case "Down":
        console.log("Swipe Up to Down");
        startX = Math.round(deviceWidth / 2);
        startY = Math.round(deviceHeight * 0.25);
        endX = Math.round(deviceWidth / 2);
        endY = Math.round(deviceHeight * 0.75);

        //perform swipe from top to bottom
        await driver.touchPerform([{
          action: 'press',
          options: {
            x: startX,
            y: startY
          }
        }, {
          action: 'wait',
          options: {
            ms: 1000
          }
        }, {
          action: 'moveTo',
          options: {
            x: endX,
            y: endY
          }
        }, {
          action: 'release'
        }]);
        break;

        case "Up":
        console.log("Swipe Down to Up");
        startX = Math.round(deviceWidth / 2);
        startY = Math.round(deviceHeight * 0.75);
        endX = Math.round(deviceWidth / 2);
        endY = Math.round(deviceHeight * 0.25);

        //perform swipe from top to bottom
        await driver.touchPerform([{
          action: 'press',
          options: {
            x: startX,
            y: startY
          }
        }, {
          action: 'wait',
          options: {
            ms: 1000
          }
        }, {
          action: 'moveTo',
          options: {
            x: endX,
            y: endY
          }
        }, {
          action: 'release'
        }]);
        break;
    }
}

export default swipeAction;