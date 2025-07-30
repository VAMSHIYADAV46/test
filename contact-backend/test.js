import fetch from 'node-fetch';

async function testContactAPI() {
  console.log('Testing contact API...');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the test script.'
  };
  
  try {
    console.log('Sending POST request to http://localhost:3001/api/contact');
    console.log('Request data:', JSON.stringify(testData, null, 2));
    
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });
    
    const data = await response.json();
    
    console.log('\nResponse status:', response.status);
    console.log('Response data:', JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('\n✅ Test passed: API returned success response');
    } else {
      console.log('\n❌ Test failed: API returned error response');
    }
  } catch (error) {
    console.error('\n❌ Test failed with error:', error.message);
  }
}

// Run the test
testContactAPI();