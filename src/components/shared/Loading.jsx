import PropTypes from "prop-types";

export const Loading = ({ loading = false, className = "" }) => {
  if (!loading) {
    return null;
  }
  return (
    <div
      className={`flex justify-center items-center min-h-screen z-50 ${className}`}
    >
      <div className="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-blue-600" />
    </div>
  );
};
Loading.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
};
