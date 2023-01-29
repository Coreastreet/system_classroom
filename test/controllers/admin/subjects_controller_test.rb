require "test_helper"

class Admin::SubjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_subjects_index_url
    assert_response :success
  end

  test "should get create" do
    get admin_subjects_create_url
    assert_response :success
  end

  test "should get update" do
    get admin_subjects_update_url
    assert_response :success
  end

  test "should get delete" do
    get admin_subjects_delete_url
    assert_response :success
  end
end
