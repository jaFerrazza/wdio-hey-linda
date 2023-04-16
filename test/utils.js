
const horizontalSwipe = async (element_passed)  => {
    /** 
     * Swipe horizontally from left to right
     * Taken from https://webdriver.io/docs/api/appium/#example
     * 
     */
        // Find the element to swipe from
        const element = await $(element_passed);

        // Swipe from left to right, starting from the element
        const screenDimensions = await driver.getWindowRect();
        const start = { x: element.getLocation().x + element.getSize().width * 0.2, y: element.getLocation().y + element.getSize().height / 2 };
        const end = { x: element.getLocation().x + element.getSize().width * 0.8, y: element.getLocation().y + element.getSize().height / 2 };
        await driver.touchPerform([
        {
            action: 'press',
            options: start,
        },
        {
            action: 'wait',
            options: { ms: 1000 },
        },
        {
            action: 'moveTo',
            options: end,
        },
        {
            action: 'release',
        },
        ]);
};

const verticalSwipe = async ()  => {
    /**
     * Swipe vertically from top to bottom
     * Taken from https://webdriver.io/docs/api/appium/#example
     */

  const element = await $('//android.widget.TextView[@text="ANXIETY"]');
  await element.waitForExist();

  // Perform the swipe action
  const screenDimensions = await driver.getWindowRect();
  const startY = 0.2 * screenDimensions.height;
  const endY = 0.8 * screenDimensions.height;
  const swipeDuration = 1000;
  let currentY = startY;
  while (currentY < endY) {
    await driver.touchPerform([
      {
        action: 'press',
        options: { x: screenDimensions.width / 2, y: currentY },
      },
      {
        action: 'wait',
        options: { ms: swipeDuration },
      },
      {
        action: 'moveTo',
        options: { x: screenDimensions.width / 2, y: currentY + 100 },
      },
      {
        action: 'release',
      },
    ]);
    currentY += 100;
  }
};

export default {horizontalSwipe, verticalSwipe};