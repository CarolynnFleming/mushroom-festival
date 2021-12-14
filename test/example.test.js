// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderFriend } from '../render-utils.js';
import { renderMushroom } from '../render-utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    '<div class="friend"><p class="name">toby</p><p class="emoji">👹</p></div>';
    

    let friend = {
        name: 'toby',
        satisfaction: 2,
        emoji: '😇'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFriend(friend).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '');
});

test('renderMushroom function test', (expect) => {
    const expected = '<div class="mushroom"></div>';



    const actual = renderMushroom().outerHTML;

    expect.equal(actual, expected, '');
});