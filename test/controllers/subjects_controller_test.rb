require "test_helper"

class SubjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get subjects_new_url
    assert_response :success
  end

  test "should get create" do
    get subjects_create_url
    assert_response :success
  end

  test "should get update" do
    get subjects_update_url
    assert_response :success
  end

  test "should get destroy" do
    get subjects_destroy_url
    assert_response :success
  end
end
