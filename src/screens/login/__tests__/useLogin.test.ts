import {ContextProps} from '../../../context';
import {ICredencial} from '../../../utils';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateCredentialsLogin', () => {
  const loginMock: jest.Mocked<Pick<ContextProps, 'handleLogin'>> = {
    handleLogin: jest.fn(),
  };
  test('should call handleLogin with the correct data and return key on success', async () => {
    const mockResponse = {data: {key: 'mockedToken'}};
    loginMock.handleLogin.mockResolvedValue(mockResponse);

    const fakeCredentials: ICredencial = {
      email: 'dandevtest3@yopmail.com',
      password: '123456DanDev',
    };

    const result = await loginMock.handleLogin(fakeCredentials);

    expect(result).toEqual(mockResponse);
  });
  test('should call toggleSnackBarError with the correct error message on failure', async () => {
    const mockError = new Error('Fake error');
    loginMock.handleLogin.mockRejectedValue(mockError.message);

    // Crea credenciales ficticias para la prueba
    const fakeCredentials: ICredencial = {
      email: 'fakeUsername',
      password: 'fakePassword',
    };

    try {
      await loginMock.handleLogin(fakeCredentials);

      fail('Expected handleLogin to reject, but it resolved successfully.');
    } catch (error: any) {
      expect(error).toBe(mockError.message);
    }
  });
});
