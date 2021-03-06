import Button from "@components/ui/button";
import Card from "@components/ui/card";
import FileInput from "@components/ui/file-input";
import Input from "@components/ui/input";
import { useUpdateCustomerMutation, User } from "@graphql/auth.graphql";
import { maskPhoneNumber } from "@utils/mask-phone-number";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { toast } from "react-toastify";
import pick from "lodash/pick";

interface Props {
  user: User;
}

type UserFormValues = {
  name?: User["name"];
  profile?: User["profile"];
};

const ProfileForm = ({ user }: Props) => {
  const { register, handleSubmit, setValue, control } = useForm<UserFormValues>(
    {
      defaultValues: {
        ...(user &&
          pick(user, [
            "name",
            "profile.bio",
            "profile.contact",
            "profile.avatar",
          ])),
      },
    }
  );
  const [updateProfile, { loading }] = useUpdateCustomerMutation();
  async function onSubmit(values: any) {
    const { data } = await updateProfile({
      variables: {
        id: user.id!,
        name: values.name,
        profile: {
          upsert: {
            id: user?.profile?.id,
            ...values.profile,
            avatar: values.profile.avatar?.[0],
          },
        },
      },
    });
    if (data?.update?.id) {
      toast.success("Profile Updated Successfully");
    } else {
      toast.error("Something went wrong");
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex space-x-4 mb-8">
        <Card className="w-full">
          <div className="mb-8">
            <FileInput control={control} name="profile.avatar" />
          </div>

          <div className="flex space-x-4 mb-6">
            <Input
              className="flex-1"
              label="Name"
              {...register("name")}
              variant="outline"
            />
            <Input
              {...register("profile.contact")}
              label="Contact Number"
              className="flex-1"
              onChange={(e) => {
                const value = maskPhoneNumber(e.target.value);
                //@ts-ignore
                setValue("profile.contact", value);
              }}
              variant="outline"
            />
          </div>
          <TextArea
            label="Bio"
            //@ts-ignore
            {...register("profile.bio")}
            variant="outline"
            className="mb-6"
          />

          <div className="flex">
            <Button className="ml-auto" loading={loading} disabled={loading}>
              Save
            </Button>
          </div>
        </Card>
      </div>
    </form>
  );
};

export default ProfileForm;
