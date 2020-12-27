require 'test_helper'

class EcommercesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ecommerces_index_url
    assert_response :success
  end

end
