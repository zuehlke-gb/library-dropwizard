package com.zuhlke.library.user;

import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import com.zuhlke.library.domain.User;
import com.zuhlke.library.domain.UserBuilder;
import com.zuhlke.library.repositories.UserRepository;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {

    @Mock UserRepository mockRepository;
    @InjectMocks UserService userService = new UserServiceImpl();
    
    @Test
    public void shouldFindByEmail() throws Exception {
        userService.findByEmail("nmo@zuhlke.com");
        verify(mockRepository).findByEmail("nmo@zuhlke.com");
    }
    
    @Test
    public void shouldCreateUser() throws Exception {
        User user = new UserBuilder().name("Marvin").build();
        userService.createUser(user);
        verify(mockRepository).save(user);
    }
    
    
}
