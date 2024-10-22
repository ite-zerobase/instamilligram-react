function ProfileBio({ nickname, job, bio }) {
  return (
    <div className="text-left text-sm">
      <div className="font-semibold">{nickname}</div>
      <div className="text-neutral-500">{job}</div>
      <div>{bio}</div>
    </div>
  );
}

export default ProfileBio;
