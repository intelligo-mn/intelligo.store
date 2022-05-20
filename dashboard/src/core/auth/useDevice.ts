import { API } from 'aws-amplify';
import { CreateDeviceInput, CreateDeviceMutation } from '../../API';
import { createDevice } from '../../graphql/mutations';
import useCustomer from '../profile/useCustomer';

export const useDevice = () => {
  const { profile } = useCustomer();

  const addDevice = async (input: CreateDeviceInput) => {
    try {
      const { data } = (await API.graphql({
        query: createDevice,
        variables: {
          input: input,
        },
      })) as {
        data: CreateDeviceMutation;
      };

      return data.createDevice;
    } catch (error: any) {
      console.error(`Error: `, error, input);
      throw error.errors[0].message;
    }
  };

  const checkDevice = (deviceId: string) => {
    return profile?.devices?.items.some(
      (device: any) => device?.id == deviceId,
    );
  };

  return {
    checkDevice,
    addDevice,
  };
};

export default useDevice;
