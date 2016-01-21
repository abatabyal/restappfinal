package io.rest.controller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.rest.dao.ProfilesDAO;
import io.rest.exception.AppException;
import io.rest.model.Profiles;



@Path("/profiles")
public class ProfilesController {
	
	
	@GET
	@Path("/get/loginInfo")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getReservation()
	{
		AppResponse response = new AppResponse();

		try {
			ProfilesDAO dao = new ProfilesDAO();
			Profiles profile= dao.getProfile();
			response.setPayload(profile);
		} catch (AppException e) {
			response.setStatus(AppResponse.ERROR);
			response.setMessage(e.getMessage());
		}
		return response;
	}
	
	
		@POST
		@Path("/update/loginProfile")
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.APPLICATION_JSON)
		public AppResponse updateProfile( Profiles profile){
			AppResponse response = new AppResponse();
			try {
				ProfilesDAO dao = new ProfilesDAO();
				profile = dao.updateProfile(profile);
				response.setPayload(profile);
			} catch (AppException e) {
				response.setStatus(AppResponse.ERROR);
				response.setMessage(e.getMessage());
			}
			return response;
		}

}
