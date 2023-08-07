beforeEach(() => {
  jest.clearAllMocks();
});

describe('show users list', () => {
  const getUserListMock: jest.Mocked<{
    getUsersList: (token: string) => Promise<any>;
  }> = {
    getUsersList: jest.fn(),
  };

  test('should call getUserList in case successful', async () => {
    const mockResponse = JSON.stringify([
      {
        id: 1,
        nombre: 'nomber 1',
        apellido: 'apellido 1',
        cedula: '123456',
        email: 'user1@user1.com',
        url: 'fakeUrl',
        imagen: 'fakeImg',
      },
      {
        id: 2,
        nombre: 'nomber 2',
        apellido: 'apellido 2',
        cedula: '123456',
        email: 'user2@user2.com',
        url: 'fakeUrl',
        imagen: 'fakeImg',
      },
    ]);

    const token = 'Token df74882c87f5c3b789ce8a18756eae62079cf13e';

    getUserListMock.getUsersList.mockResolvedValue(mockResponse);

    const result = await getUserListMock.getUsersList(token);

    expect(result).toEqual(mockResponse);
  });

  test('should call getUserList in case bad request', async () => {
    const token = 'Token df74882c87f5c3b789ce8a18756eae62079cf13e';

    const mockError = new Error('Fake error');
    getUserListMock.getUsersList.mockRejectedValue(mockError.message);

    try {
      await getUserListMock.getUsersList(token);

      fail('Expected handleRegister to reject, but it resolved successfully.');
    } catch (error: any) {
      expect(error).toBe(mockError.message);
    }
  });
});
