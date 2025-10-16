async function sendApiRequest(resource) {
    console.log(`Trying to fetch from: ${resource}`);

    const response = await fetch(resource);
    if (!response.ok) {
        throw new Error(`Primary fetch failed with status ${response.status}`);
    }
    return response.json();
}

async function sendBackupApiRequest(resource) {
    console.log(`Trying backup fetch from: ${resource}`);

    const response = await fetch(resource);
    if (!response.ok) {
        throw new Error(`Backup fetch failed with status ${response.status}`);
    }
    return response.json();
}

async function sendImprovisedApiRequest() {
    console.log('Sending API request...');

    let responseData;
    try {
        responseData = await sendApiRequest('https://this-api-does-not-exist.example.com/data');
    } catch (error) {
        console.warn('Primary request failed:', error.message);
        try {
            responseData = await sendBackupApiRequest('https://jsonplaceholder.typicode.com/todos');
            if (!responseData || typeof responseData !== 'object' || !('id' in responseData)) {
                throw new Error('Backup resource returned invalid data');
            }
        } catch (backupError) {
            throw new Error(`Both primary and backup requests failed: ${backupError.message}`);
        }
    }

    console.log('Final response data:', responseData);
}

async function initializeTestData() {
    try {
        await sendImprovisedApiRequest();
    } catch (e) {
        console.error('Error during initialization:', e.message);
    }
}

initializeTestData();
