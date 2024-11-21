const assert = require('assert');

Feature('Like Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});


Scenario('like one restaurant', async ({ I }) => {
  I.see("You don't have any favorite restaurants yet", '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(locate('.restaurant-item').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});