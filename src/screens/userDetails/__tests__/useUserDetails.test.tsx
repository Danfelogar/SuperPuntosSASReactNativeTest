import {IUserDetails} from '../types';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validate when update a single user', () => {
  const updateUserMock: jest.Mocked<{
    updateUser: (data: IUserDetails, token: string) => Promise<any>;
  }> = {
    updateUser: jest.fn(),
  };

  test('should call updateUser in case successfully.', async () => {
    const mockResponse = JSON.stringify({
      username: 'DanDev10',
      password: '12345678DanDev',
      password2: '12345678DanDev',
      entidad: 'EPS',
    });
    const token = 'Token df74882c87f5c3b789ce8a18756eae62079cf13e';

    updateUserMock.updateUser.mockResolvedValue(mockResponse);

    const result = await updateUserMock.updateUser(
      JSON.parse(mockResponse),
      token,
    );

    expect(result).toEqual(mockResponse);
  });

  test('should call updateUser waiting expected an error.', async () => {
    const mockResponse = JSON.stringify({
      username: 'DanDev10',
      password: '12345678DanDev',
      password2: '12345678DanDev',
      entidad: 'EPS',
    });
    const token = 'Token df74882c87f5c3b789ce8a18756eae62079cf13e';

    const mockError = new Error('Fake error');

    updateUserMock.updateUser.mockRejectedValue(mockError.message);

    try {
      await updateUserMock.updateUser(JSON.parse(mockResponse), token);

      fail('Expected handleRegister to reject, but it resolved successfully.');
    } catch (error: any) {
      expect(error).toBe(mockError.message);
    }
  });
});
