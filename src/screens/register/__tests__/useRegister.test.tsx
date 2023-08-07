import {ContextProps} from '../../../context';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validate Register user', () => {
  const registerMock: jest.Mocked<Pick<ContextProps, 'handleRegister'>> = {
    handleRegister: jest.fn(),
  };

  test('should call handleRegister with the correct data and return the key in case of success', async () => {
    const mockResponse = JSON.stringify({
      username: 'DanDev10',
      password: '12345678DanDev',
      password2: '12345678DanDev',
      email: 'dandevtest10@yopmail.com',
      nombre: 'Daniel Felipe',
      apellido: 'Dev Front 10',
      cedula: 1234567890,
      entidad: 'EPS',
    });
    registerMock.handleRegister.mockResolvedValue(mockResponse);

    const result = await registerMock.handleRegister(JSON.parse(mockResponse));

    expect(result).toEqual(mockResponse);
  });

  test('should call handleRegister waiting expected an error', async () => {
    const mockResponse = JSON.stringify({
      username: 'DanDev10',
      password: '12345678DanDev',
      password2: '12345678DanDev',
      email: 'dandevtest10@yopmail.com',
      nombre: 'Daniel Felipe',
      apellido: 'Dev Front 10',
      cedula: 1234567890,
      entidad: 'EPS',
    });
    const mockError = new Error('Fake error');
    registerMock.handleRegister.mockRejectedValue(mockError.message);

    try {
      await registerMock.handleRegister(JSON.parse(mockResponse));

      fail('Expected handleRegister to reject, but it resolved successfully.');
    } catch (error: any) {
      expect(error).toBe(mockError.message);
    }
  });
});
